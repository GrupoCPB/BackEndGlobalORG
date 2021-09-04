import { Router, Request, Response } from 'express';
import AuthVoluntaryController from '../Controller/AuthVoluntaryController';
import CreateVoluntaryController from '../Controller/CreateVoluntaryController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import Logger from '../modules/log';

const routes = Router();

const authVoluntaryController = new AuthVoluntaryController();
const createVoluntaryController = new CreateVoluntaryController();

routes.post('/auth', authVoluntaryController.handle);
routes.post('/voluntary', createVoluntaryController.handle);

routes.post('/testeAuth', ensureAuthenticated, (req, res) => {
  const { teste } = req.body;

  res.json(teste);
});
routes.get('/logger', (_, res) => {
  Logger.error('ISSO É UM ERRO');

  res.send('HELLO WORLD');
});

export default routes;
