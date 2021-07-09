import { Router, Request, Response } from 'express';
import AuthVoluntaryController from '../Controller/AuthVoluntaryController';
import CreateVoluntaryController from '../Controller/CreateVoluntaryController';

const routes = Router();

const authVoluntaryController = new AuthVoluntaryController();
const createVoluntaryController = new CreateVoluntaryController();

routes.post('/auth', authVoluntaryController.handle);
routes.post('/voluntary', createVoluntaryController.handle);

export default routes;
