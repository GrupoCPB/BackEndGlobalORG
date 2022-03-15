import { Router } from 'express';
import { createUserController } from '../useCases/createUser';

const router = Router();

router.get('/', (_, res) => res.json('Base Url'));
router.post('/api/users', (req, res) => createUserController.handle(req, res));

export { router };
