import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import VoluntariesRepository from '../repositories/VoluntariesRepositories';

interface IAuthRequest {
  email: string;
  password: string;
}

export default class AuthvoluntaryService {
  async execute({ email, password }: IAuthRequest) {
    const voluntaryRepositories = getCustomRepository(VoluntariesRepository);

    const voluntary = await voluntaryRepositories.findOne({ email });

    if (!voluntary) {
      throw new Error('Error in authentication, password or email incorrect');
    }

    const passwordMatch = await compare(password, voluntary.password);

    if (!passwordMatch) {
      throw new Error('Error in authentication, password or email incorrect');
    }
    // refresh token
    const token = sign(
      {
        email: voluntary.email,
      },
      'b17b6b6b62e97fce0eb6117dc5fa67b8',
      {
        subject: voluntary.id,
        expiresIn: '1d',
      },
    );
    return token;
  }
}
