import express from "express";
import "dotenv/config";
import connectDB from "./db/connect.ts";
import TaskModel from "./models/TaskModel.ts";
import router from "./routes/TaskRoutes.ts";

const app = express();
const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGO_URI;

const firstTask = new TaskModel({
    name: "Model Task",
    short_description: "This is a model task",
    task_body:
        "This is a model task with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero aperiam voluptatem sed quia consequuntur modi, ipsam repellat animi vel, nostrum ea obcaecati magni.",
    completed: false,
    important: false,
});

app.use("/api/tasks", router);

const start = async function () {
    try {
        await connectDB(mongoUri, "TaskManager");
        // await firstTask.save();
        // console.log("First task is saved!");
        console.log("CONNECTED TO THE DB...");

        app.listen(port, function () {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (err) {
        console.error(err);
    }
};
start();
