import express, { response, json, request } from 'express';
import ClassesController from './controllers/ClassesController';
import Connectionontroller from './controllers/ConnectionsController';


const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new Connectionontroller();

// GET: Buscar
// POST: Criar
// PUT: Atualizar
// DELETE: Deletar

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;