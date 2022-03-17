import { Request, Response } from 'express';
import { TChangeRoleDTO } from './changeRole.dto';
import { ChangeRoleUseCase } from './changeRole.usecase';

export class ChangeRoleController {
  constructor(private readonly changeRoleUseCase: ChangeRoleUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { newRole, userId } = req.body as TChangeRoleDTO;
    const { id, role } = req.user;

    try {
      await this.changeRoleUseCase.execute({
        newRole,
        userId,
        roleUserLogged: role,
        userIdLogged: id
      });

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
