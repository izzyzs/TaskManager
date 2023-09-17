import { Router } from "express";
import { getAllTasks, createTask, editTask, deleteTask } from "../controllers/TaskController";

const router = Router();

router.route("/").get(getAllTasks).put(createTask);
router.route("/:id").patch(editTask).delete(deleteTask);

export default router;
