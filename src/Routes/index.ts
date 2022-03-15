import { Router } from 'express';
import { createUserController } from '../useCases/createUser';
import { loginUserController } from '../useCases/loginUser';

const router = Router();

router.get('/', (_, res) => res.json('Base Url'));
router.post('/api/users', (req, res) => createUserController.handle(req, res));
router.post('/api/users/auth', (req, res) => loginUserController.handle(req, res));

export { router };
