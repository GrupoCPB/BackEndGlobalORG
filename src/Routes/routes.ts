import { Router, Request, Response } from 'express';
import AuthVoluntaryController from '../Controller/AuthVoluntaryController';
import CreateVoluntaryController from '../Controller/CreateVoluntaryController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import Logger from '../modules/log';

const routes = Router();

const authVoluntaryController = new AuthVoluntaryController();
const createVoluntaryController = new CreateVoluntaryController();

routes.post('/api/auth', authVoluntaryController.handle);
routes.post('/api/voluntary', createVoluntaryController.handle);

routes.post('/api/testeAuth', ensureAuthenticated, (req, res) => {
  const { teste } = req.body;

  res.json(teste);
});
routes.get('/api/logger', (_, res) => {
  Logger.error('ISSO É UM ERRO');

  res.send('HELLO WORLD');
});

export default routes;
