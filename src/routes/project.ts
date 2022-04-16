// importing dependencies
import express from 'express';

// making a router
const projectRoute = express.Router();

// importing controllers
import {createProject} from '../controller/project.controller';

// defining the routes
projectRoute.post('/create', createProject);

projectRoute.put('/checkpoints/delete', createProject);

export default projectRoute;