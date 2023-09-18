import { ObjectId } from "mongodb";
export interface TaskInterface {
    _id: ObjectId;
    name: string;
    short_description?: string;
    task_body?: string;
    isCompleted: boolean;
    isImportant: boolean;
    isDeleted: boolean;
}

export interface TaskDataInterface {
    success: boolean;
    data: {
        tasks: Array<TaskInterface>;
        nbHits: number;
    };
}
