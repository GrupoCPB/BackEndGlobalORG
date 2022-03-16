import { Request, Response } from 'express';
import { LoginUserUseCase } from './loginUser.usecase';

export class LoginUserController {
  constructor(private readonly loginUserUseCase: LoginUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
      LoginUserController;
      const authenticated = await this.loginUserUseCase.execute({
        email,
        password,
      });

      return res.status(200).json(authenticated);
    } catch (err) {
      console.log(err.message);

      return res
        .status(401)
        .json({ message: err.message || 'Unexpected error.' });
    }
  }
}
