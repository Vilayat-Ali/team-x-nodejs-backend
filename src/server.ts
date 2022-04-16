// importing dependencies
import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import helmet from 'helmet';
import consola from 'consola';
import dotenv from 'dotenv';

// bringing in the environment variables
dotenv.config();

// Connecting to mongoDB 
try{
mongoose.connect(process.env.MONGODB_URI!, () => {
    consola.info({message: "Connected to MongoDB", badge: false});
});
}catch(err: any){
    consola.fatal({message: `${err.message}`, badge: true})
}

// port configuration
const port = Number(process.env.PORT || 8000);

// configuring express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// importing API routes
import projectRoute from './routes/project';

// Mapping out the routes here
app.use('/api/v1/project', projectRoute);

// App listening here
app.listen(port, () => {
    consola.success({
        message: `Server rolling on ${port} 🚀🚀`,
        badge: false
    })
})