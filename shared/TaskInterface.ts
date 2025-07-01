export interface TaskInterface {
    id: number;
    name: string;
    shortDescription?: string;
    taskBody?: string;
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
