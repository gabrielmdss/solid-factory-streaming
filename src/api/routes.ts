import express from 'express';
import LiveStreamController from '../controllers/livestream.controller';

const routes = express();

routes.post('/start', LiveStreamController.start);


export default routes;
