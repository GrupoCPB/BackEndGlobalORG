import { Request, Response } from 'express';
import Logger from '../modules/log';
import CreateVoluntaryService from '../services/CreateVoluntaryService';

export default class CreateVoluntaryController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createVoluntaryService = new CreateVoluntaryService();
    try {
      const user = await createVoluntaryService.execute({
        name,
        email,
        password,
      });

      return res.status(201).json(user);
    } catch (err) {
      console.log(err);

      Logger.error(err.message);
      return res.status(400).json({ message: err.message });
    }
  }
}
