import {Request, Response} from "express";

// importing models 
import projectModel from "../models/Project";

// creating a new project
export const createProject = async(req: Request, res: Response) => {
try{
    const {project_name, project_id, project_description, members, checkpoints} = req.body;
    const newProject = new projectModel({
        project_name,
        project_id,
        project_description,
        checkpoints,
        members
    })
    const status = await newProject.save();
    res.json({status: "success", message: "Project created successfully.", data: status}).status(200);
}catch(err: any){
    res.json({status: "failed", message: err.message})
}
}

// Removing checkpoints
export const removeCheckPoint = async(req: Request, res: Response) => {
    try{

    }catch(err: any){
        res.json({status: "failed", message: err.message})
    }
}