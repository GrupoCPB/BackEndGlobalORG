import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUser.usecase';

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, role } = req.body;
    try {
      const user = await this.createUserUseCase.execute({
        email,
        name,
        password,
        role,
      });

      return res.status(201).json({ user });
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
