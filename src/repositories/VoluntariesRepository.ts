import { EntityRepository, Repository } from 'typeorm';
import Voluntary from '../models/Voluntary';

@EntityRepository(Voluntary)
export default class VoluntariesRepository extends Repository<Voluntary> {
  findByEmail(email: string) {
    return this.findOne({ where: { email } });
  }
}
