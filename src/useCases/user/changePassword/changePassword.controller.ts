import { Request, Response } from 'express';
import { ChangePasswordUseCase } from './changePassword.usecase';

export class ChangePasswordController {
  constructor(private readonly changePasswordUseCase: ChangePasswordUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { newPassword } = req.body;

    try {
      await this.changePasswordUseCase.execute({ idUser: id, newPassword });

      return res.status(200).send();
    } catch (err) {
      let msg = '';
      if (err.length && err[0].constraints) {
        const [key] = Object.keys(err[0].constraints);
        msg = err[0].constraints[key];
      }

      console.log(msg || err.message);

      return res
        .status(400)
        .json({ message: msg || err.message || 'Unexpected error.' });
    }
  }
}
