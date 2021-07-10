import { Request, Response } from 'express';
import AuthVoluntaryService from '../services/AuthVoluntaryService';

export default class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authVoluntaryService = new AuthVoluntaryService();

    const token = await authVoluntaryService.execute({
      email,
      password,
    });
    return res.json(token);
  }
}
