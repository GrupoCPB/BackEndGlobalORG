import { Router } from 'express';
import { ensureAuthenticated } from '@/middleware/ensureAuthenticated';
import { createUserController } from '../useCases/user/createUser';
import { loginUserController } from '../useCases/user/loginUser';
import { changePasswordController } from '@/useCases/user/changePassword';

const router = Router();

router.get('/', (_, res) => res.json('Base Url'));
router.post('/api/users', (req, res) => createUserController.handle(req, res));
router.post('/api/users/auth', (req, res) => loginUserController.handle(req, res));
router.put('/api/users/change-password', ensureAuthenticated, (req, res) => changePasswordController.handle(req, res));

export { router };
