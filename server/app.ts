import express from "express";
import "dotenv/config";
import connectDB from "./db/connect";
// import TaskModel from "./models/TaskModel";
import taskRoutes from "./routes/TaskRoutes";
import { getAllTasks } from "./controllers/TaskController";
import cors from "cors";
import { TaskInterface } from "../shared/TaskInterface";
import { ObjectId } from "mongodb";
import { errorHandlerMiddleware } from "./middleware/ErrorHandler";

const app = express();
const port = process.env.PORT || 3001;
const mongoUri = process.env.MONGO_URI;

const taskList: Array<{}> = [];
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use(errorHandlerMiddleware);

const start = async function () {
    try {
        app.listen(port, function () {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (err) {
        console.error(err);
    }
};

start();
