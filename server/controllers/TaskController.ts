import TaskModel from "../models/TaskModel.ts";
import { Request, Response } from "express";

export const getAllTasks = async function (req: Request, res: Response) {
    try {
        const tasks = await TaskModel.find({});
        const taskList = [tasks];
        res.status(200).json({ success: true, data: { taskList, nbHits: tasks.length } });
    } catch (err) {
        res.status(500).json({ error_msg: err });
    }
};

export const createTask = async function (req: Request, res: Response) {
    try {
    } catch (error) {}
};
// const getTask = async function (req: Request, res: Response) {};
// const editTask = async function (req: Request, res: Response) {};
// const deleteTask = async function (req: Request, res: Response) {};

// export default { getAllTasks, getTask, createTask, editTask, deleteTask };
