import { Request, Response } from 'express';
import CreateVoluntaryService from '../services/CreateVoluntaryService';

export default class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createVoluntaryService = new CreateVoluntaryService();

    const user = await createVoluntaryService.execute({
      name,
      email,
      password,
    });

    return res.json(user);
  }
}
