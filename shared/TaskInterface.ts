export interface TaskInterface {
    name: string;
    short_description?: string;
    task_body?: string;
    isCompleted: boolean;
    isImportant: boolean;
}

export interface TaskDataInterface {
    success: boolean;
    data: {
        tasks: Array<TaskInterface>;
        nbHits: number;
    };
}
