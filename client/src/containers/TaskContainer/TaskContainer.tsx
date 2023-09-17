import React from "react";
import "./taskcontainer.css";
import { AddTaskCard, TaskCard } from "../../components";
import { TaskInterface, TaskDataInterface } from "../../../../shared/TaskInterface";

interface TaskContainerProps {
    openAddModal: () => void;
    openTaskModal: (task: TaskInterface) => void;
}

function TaskContainer({ openAddModal, openTaskModal }: TaskContainerProps) {
    const [allTasks, setAllTasks] = React.useState<TaskDataInterface | null>(null);
    React.useEffect(function () {
        fetch("http://localhost:3001/api/tasks", { method: "GET" })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setAllTasks(data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);
    return (
        <div className="row container-fluid g-4 gy-5 text-center">
            <AddTaskCard openAddModal={openAddModal} />
            {allTasks ? (
                <>
                    {allTasks.data.tasks.map(function (item, index) {
                        return (
                            <React.Fragment key={index}>
                                <TaskCard openTaskModal={openTaskModal} taskData={item} />
                            </React.Fragment>
                        );
                    })}
                </>
            ) : (
                <h6>Loading all tasks...</h6>
            )}
        </div>
    );
}

export default TaskContainer;
