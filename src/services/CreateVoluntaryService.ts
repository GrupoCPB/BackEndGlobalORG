import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Logger from '../modules/log';
import VoluntariesRepository from '../repositories/VoluntariesRepository';

interface IVoluntaryRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateVoluntaryService {
  async execute({ name, email, password }: IVoluntaryRequest) {
    const voluntaryRepo = getCustomRepository(VoluntariesRepository);
    if (!email || !password || !name) {
      throw new Error('Data not provided');
    }
    const voluntaryExists = await voluntaryRepo.findByEmail(email);
    if (voluntaryExists) {
      throw new Error('Voluntary already exists');
    }
    const passwordHash = await hash(password, 8);
    const newVoluntary = voluntaryRepo.create({
      name,
      email,
      password: passwordHash,
    });

    await voluntaryRepo.save(newVoluntary);

    const voluntaryWithoutPassword = {
      name: newVoluntary.name,
      email: newVoluntary.email,
    };

    return voluntaryWithoutPassword;
  }
}
