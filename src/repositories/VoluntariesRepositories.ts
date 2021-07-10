import { EntityRepository, Repository } from 'typeorm';
import Voluntary from '../models/Voluntary';

@EntityRepository(Voluntary)
export default class VoluntariesRepositories extends Repository<Voluntary> {}
