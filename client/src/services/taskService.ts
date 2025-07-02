import type { TaskDataInterface } from "../../../shared/TaskInterface";

interface NecessaryForTask {
    name: string;
    shortDescription?: string;
    taskBody?: string;
    isImportant: boolean;
}

export function loadTasks(setTaskData: (data: TaskDataInterface) => void) {
    fetch("http://localhost:3001/api/tasks", { method: "GET" })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Fetched data:", data);
            setTaskData(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
}

export function addTask(data: NecessaryForTask, onSuccess: () => void) {
    fetch("http://localhost:3001/api/tasks", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                onSuccess();
                return response.json();
            } else {
                throw new Error("Failed to Add Task");
            }
        })
        .then((result) => {
            console.log("Success:", result);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export function deleteTask(id: number, onSuccess: () => void) {
    const taskIdAsString: string = id.toString();
    fetch(`http://localhost:3001/api/tasks/${taskIdAsString}`, { method: "DELETE" })
        .then(function (response) {
            if (response.ok) {
                onSuccess();
            }
        })
        .catch((error) => console.error("Error deleting task: ", error));
}
