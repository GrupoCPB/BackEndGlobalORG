import { Router, Request, Response } from 'express';
import AuthVoluntaryController from '../Controller/AuthVoluntaryController';
import CreateVoluntaryController from '../Controller/CreateVoluntaryController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const routes = Router();

const authVoluntaryController = new AuthVoluntaryController();
const createVoluntaryController = new CreateVoluntaryController();

routes.post('/auth', authVoluntaryController.handle);
routes.post('/voluntary', createVoluntaryController.handle);

routes.post('/testeAuth', ensureAuthenticated, (req, res) => {
  const { teste } = req.body;

  res.json(teste);
});

export default routes;
