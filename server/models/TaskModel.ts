import mongoose, { model } from "mongoose";
import { TaskInterface } from "../../shared/TaskInterface.ts";

const TaskSchema = new mongoose.Schema<TaskInterface>({
    name: {
        type: String,
        required: [true, "You must provide a name for your task!!"],
        trim: true,
        maxLength: [25, "The max length is 25 characters"],
    },
    short_description: {
        type: String,
        required: false,
        trim: true,
        maxLength: [90, "The max length is 25 characters"],
    },
    task_body: {
        type: String,
        required: false,
        trim: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    isImportant: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model<TaskInterface>("Task", TaskSchema);
