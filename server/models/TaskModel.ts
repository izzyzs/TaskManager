import mongoose from "mongoose";
import { TaskInterface } from "../../shared/TaskInterface";
import { ObjectId } from "mongodb";

interface TaskModelInterface extends TaskInterface {
    _id: ObjectId;
}

const TaskSchema = new mongoose.Schema<TaskModelInterface>({
    _id: { type: ObjectId },
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
