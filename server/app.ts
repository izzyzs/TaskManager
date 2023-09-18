import express from "express";
import "dotenv/config";
import connectDB from "./db/connect";
import TaskModel from "./models/TaskModel";
import tasks from "./routes/TaskRoutes";
import { getAllTasks } from "./controllers/TaskController";
import cors from "cors";
import { TaskInterface } from "../shared/TaskInterface";
import { ObjectId } from "mongodb";

const app = express();
const port = process.env.PORT || 3001;
const mongoUri = process.env.MONGO_URI;

const taskList: Array<{}> = [
    {
        _id: new ObjectId(),
        name: "Model Task 1",
        short_description: "This is model task 1",
        task_body:
            "This is model task 1 with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero aperiam voluptatem sed quia consequuntur modi, ipsam repellat animi vel, nostrum ea obcaecati magni.",
        isCompleted: false,
        isImportant: false,
        isDeleted: false,
    },
    {
        _id: new ObjectId(),
        name: "Model Task 2",
        short_description: "This is model task 2",
        task_body:
            "This is model task 2 with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero aperiam voluptatem sed quia consequuntur modi, ipsam repellat animi vel, nostrum ea obcaecati magni.",
        isCompleted: false,
        isImportant: false,
        isDeleted: false,
    },
    {
        _id: new ObjectId(),
        name: "Model Task 3",
        short_description: "This is model task 3",
        task_body:
            "This is model task 3 with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero aperiam voluptatem sed quia consequuntur modi, ipsam repellat animi vel, nostrum ea obcaecati magni.",
        isCompleted: false,
        isImportant: false,
        isDeleted: false,
    },
    {
        _id: new ObjectId(),
        name: "Model Task 4",
        short_description: "This is model task 4",
        task_body:
            "This is model task 4 with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero aperiam voluptatem sed quia consequuntur modi, ipsam repellat animi vel, nostrum ea obcaecati magni.",
        isCompleted: false,
        isImportant: false,
        isDeleted: false,
    },
    {
        _id: new ObjectId(),
        name: "Model Task 5",
        short_description: "This is model task 5",
        task_body:
            "This is model task 5 with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero aperiam voluptatem sed quia consequuntur modi, ipsam repellat animi vel, nostrum ea obcaecati magni.",
        isCompleted: false,
        isImportant: false,
        isDeleted: false,
    },
];
app.use(cors());
app.use("/api/tasks", tasks);

const start = async function () {
    try {
        await connectDB(mongoUri, "TaskManager");
        // for (let i: number = 0; i < taskList.length; i++) {
        //     await TaskModel.create(taskList[i]);
        // }
        console.log("CONNECTED TO THE DB...");

        app.listen(port, function () {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (err) {
        console.error(err);
    }
};
start();
