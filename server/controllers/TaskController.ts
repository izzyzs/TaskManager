import TaskModel from "../models/TaskModel";
import { TaskInterface } from "../../shared/TaskInterface";
import { Request, Response } from "express";

const getAllTasks = async function (req: Request, res: Response) {
    try {
        const tasks = await TaskModel.find({});
        res.json({ success: true, data: { tasks, nbHits: tasks.length } });
    } catch (err) {
        res.json({ error_msg: err });
        console.error(err);
    }
};

const createTask = async function (req: Request, res: Response) {
    try {
        const newTask = new TaskModel(req.body);
        await newTask.save();
        console.log("the newTask has been saved");
    } catch (error) {
        console.error(error);
    }
};
const editTask = async function (req: Request, res: Response) {};
const deleteTask = async function (req: Request, res: Response) {};

// export default { getAllTasks, getTask, createTask, editTask, deleteTask };

export { getAllTasks, createTask, editTask, deleteTask };
