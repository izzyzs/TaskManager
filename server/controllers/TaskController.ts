import TaskModel from "../models/TaskModel";
import { TaskInterface } from "../../shared/TaskInterface";
import { Request, Response } from "express";

const getAllTasks = async function (req: Request, res: Response) {
    try {
        const tasks = await TaskModel.find({});
        res.json({ success: true, data: { tasks, nbHits: tasks.length } });
    } catch (error) {
        res.status(500).json({ error_msg: error });
        console.error(error);
    }
};

const createTask = async function (req: Request, res: Response) {
    try {
        const newTask = await TaskModel.create(req.body);
        res.json({ newTask });
        console.log(newTask);
    } catch (error) {
        res.status(500).json({ error_msg: error });
        console.error(error);
    }
};
const editTask = async function (req: Request, res: Response) {
    try {
        const { id: taskID } = req.params;
        const task = await TaskModel.findByIdAndUpdate(taskID, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return res.status(404).json({ error_msg: `No task with id: ${taskID}` });
        }
        res.status(200).json({ updated_task: task });
    } catch (error) {
        res.status(500).json({ error_msg: error });
        console.error(error);
    }
};
const deleteTask = async function (req: Request, res: Response) {
    try {
        const { id: taskID } = req.params;
        const deletedTask = await TaskModel.findByIdAndRemove(taskID);
        res.status(200).json({ deleted_task: deletedTask });
        if (!deletedTask) {
            return res.status(404).json({ error_msg: `No task with id: ${taskID}` });
        }
    } catch (error) {
        res.status(500).json({ error_msg: error });
        console.error(error);
    }
};

// export default { getAllTasks, getTask, createTask, editTask, deleteTask };

export { getAllTasks, createTask, editTask, deleteTask };
