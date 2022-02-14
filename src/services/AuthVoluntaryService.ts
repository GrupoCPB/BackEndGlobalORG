import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import authConfig from '../config/auth';

import Voluntary from '../models/Voluntary';
import VoluntariesRepository from '../repositories/VoluntariesRepository';
import Logger from '../modules/log';

interface IAuthRequest {
  email: string;
  password: string;
}

interface Response {
  voluntary: Voluntary;
  token: string;
}

export default class AuthVoluntaryService {
  async execute({ email, password }: IAuthRequest): Promise<Response> {
    const voluntaryRepo = getCustomRepository(VoluntariesRepository);
    const voluntary = await voluntaryRepo.findByEmail(email);

    if (!voluntary) {
      throw new Error('Error in authentication, password or email incorrect');
    }

    const passwordMatch = await compare(password, voluntary.password);

    if (!passwordMatch) {
      throw new Error('Error in authentication, password or email incorrect');
    }
    // refresh token

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: voluntary.id,
      expiresIn,
    });

    return {
      voluntary,
      token,
    };
  }
}
