// importing dependencies
import express from 'express';

// making a router
const projectRoute = express.Router();

// importing controllers
import {createProject} from '../controller/project.controller';
import {deleteProject} from "../controller/project.controller";
import {removeCheckPoint} from "../controller/project.controller";

// defining the routes
projectRoute.post('/create', createProject);
projectRoute.delete('/delete', deleteProject);
projectRoute.put('/checkpoints/delete', removeCheckPoint);

export default projectRoute;