import { TaskDataInterface } from "../../../shared/TaskInterface";
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
        .then((data) => setTaskData(data))
        .catch((error) => console.error("Error fetching data: ", error));
}

export function addTask(data: NecessaryForTask) {
    fetch("http://localhost:3001/api/tasks", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to Add Task");
            }
            return response.json();
        })
        .then((result) => {
            console.log("Success:", result);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
