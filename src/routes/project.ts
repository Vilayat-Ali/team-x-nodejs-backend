// importing dependencies
import express from 'express';

// making a router
const projectRoute = express.Router();

// importing controllers
import {createProject, getProject, deleteProject, removeCheckPoint} from '../controller/project.controller';

// defining the routes
projectRoute.get('/all', getProject);
projectRoute.post('/create', createProject);
projectRoute.delete('/delete', deleteProject);
projectRoute.put('/checkpoints/delete', removeCheckPoint);

export default projectRoute;