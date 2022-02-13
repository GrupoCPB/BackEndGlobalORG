import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import VoluntariesRepositories from '../repositories/VoluntariesRepositories';

interface IVoluntaryRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateVoluntaryService {
  async execute({ name, email, password }: IVoluntaryRequest) {
    const voluntariesRepository = getCustomRepository(VoluntariesRepositories);
    if (!email) {
      throw new Error('email incorrect');
    }
    const voluntaryAlreadyExists = await voluntariesRepository.findOne({
      email,
    });
    if (voluntaryAlreadyExists) {
      throw new Error('Voluntary already exists');
    }
    const passwordHash = await hash(password, 8);
    const newVoluntary = voluntariesRepository.create({
      name,
      email,
      password: passwordHash,
    });
    await voluntariesRepository.save(newVoluntary);

    const voluntaryWithoutPassword = {
      name: newVoluntary.name,
      email: newVoluntary.email,
    };

    return voluntaryWithoutPassword;
  }
}
