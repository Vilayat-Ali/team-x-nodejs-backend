import {Schema, model} from "mongoose";


interface memberSchemaType{
    name: string,
    position: string
}

interface ProjectSchematype{
    project_name: string,
    project_id: string,
    project_description: string,
    checkpoints: string[],
    members: memberSchemaType[]
}

const memberSchema = new Schema<memberSchemaType>({
    name: {type: String, required: true},
    position: {type: String, required: true}
})

const ProjectSchema = new Schema<ProjectSchematype>({
    project_name: {type:String, required: true, unique: true},
    project_id: {type:String, required: true, unique: true},
    project_description: {type:String, required: true},
    checkpoints: {type: [String], required: false},
    members: {type: [memberSchema], required: false}
})

const projectModel = model('project', ProjectSchema);

export default projectModel;
