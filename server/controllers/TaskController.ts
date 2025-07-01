// import TaskModel from "../models/TaskModel";
import { PrismaClient } from "@prisma/client";
import { TaskInterface } from "../../shared/TaskInterface";
import { Request, Response } from "express";
import { asyncWrapper } from "../middleware/asyncWrapper";

const prisma = new PrismaClient();

const getAllTasks = asyncWrapper(async function (req: Request, res: Response) {
    const tasks = await prisma.task.findMany();
    res.json({ success: true, data: { tasks, nbHits: tasks.length } });
});

// const getAllTasks = async function (req: Request, res: Response) {
//     try {
//         const tasks = await TaskModel.find({});
//         res.json({ success: true, data: { tasks, nbHits: tasks.length } });
//     } catch (error) {
//         res.status(500).json({ error_msg: error });
//         console.error(error);
//     }
// };

const createTask = asyncWrapper(async function (req: Request, res: Response) {
    const newTask = await prisma.task.create({
        data: {
            ...req.body,
        },
    });
    res.json({ newTask });
    console.log("new task created: ", newTask);
});
// const createTask = async function (req: Request, res: Response) {
//     try {
//         const newTask = await TaskModel.create(req.body);
//         res.json({ newTask });
//         console.log(newTask);
//     } catch (error) {
//         res.status(500).json({ error_msg: error });
//         console.error(error);
//     }
// };
const editTask = asyncWrapper(async function (req: Request, res: Response) {
    const { id: taskID } = req.params;
    const task = await prisma.task.update({
        where: {
            id: +taskID,
        },
        data: { ...req.body },
    });
    if (!task) {
        return res.status(404).json({ error_msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ updated_task: task });
});

// const editTask = async function (req: Request, res: Response) {
//     try {
//         const { id: taskID } = req.params;
//         const task = await TaskModel.findByIdAndUpdate(taskID, req.body, {
//             new: true,
//             runValidators: true,
//         });
//         if (!task) {
//             return res.status(404).json({ error_msg: `No task with id: ${taskID}` });
//         }
//         res.status(200).json({ updated_task: task });
//     } catch (error) {
//         res.status(500).json({ error_msg: error });
//         console.error(error);
//     }
// };

const deleteTask = asyncWrapper(async function (req: Request, res: Response) {
    const { id: taskID } = req.params;
    const deletedTask = await prisma.task.delete({
        where: { id: +taskID },
    });
    res.status(200).json({ deleted_task: deletedTask });
    if (!deletedTask) {
        return res.status(404).json({ error_msg: `No task with id: ${taskID}` });
    }
});

// const deleteTask = async function (req: Request, res: Response) {
//     try {
//         const { id: taskID } = req.params;
//         const deletedTask = await TaskModel.findByIdAndRemove(taskID);
//         res.status(200).json({ deleted_task: deletedTask });
//         if (!deletedTask) {
//             return res.status(404).json({ error_msg: `No task with id: ${taskID}` });
//         }
//     } catch (error) {
//         res.status(500).json({ error_msg: error });
//         console.error(error);
//     }
// };

// export default { getAllTasks, getTask, createTask, editTask, deleteTask };

export { getAllTasks, createTask, editTask, deleteTask };
