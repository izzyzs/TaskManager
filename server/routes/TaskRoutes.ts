import { getAllTasks, createTask } from "../controllers/TaskController.ts";
import { Router } from "express";

const router = Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id");

export default router;
