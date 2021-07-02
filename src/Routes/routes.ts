import { Router, Request, Response } from 'express';
import AuthUserController from '../Controller/AuthUserController';
import CreateUserController from '../Controller/CreateUserController';

const routes = Router();

const authUserController = new AuthUserController();
const createUserController = new CreateUserController();

routes.post('/auth', authUserController.handle);
routes.post('/user', createUserController.handle);

export default routes;
