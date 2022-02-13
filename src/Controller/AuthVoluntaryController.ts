import { Request, Response } from 'express';
import Logger from '../modules/log';
import AuthVoluntaryService from '../services/AuthVoluntaryService';

export default class AuthVoluntaryController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const authVoluntaryService = new AuthVoluntaryService();

      const userAuthenticated = await authVoluntaryService.execute({
        email,
        password,
      });
      return res.json(userAuthenticated);
    } catch (err) {
      Logger.error(err);

      return res.status(401).json({ message: err.message });
    }
  }
}
