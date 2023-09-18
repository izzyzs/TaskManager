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
                    {allTasks.data.tasks.map(function (task) {
                        return (
                            <React.Fragment key={task._id.toString()}>
                                <TaskCard loadingCard={false} openTaskModal={openTaskModal} taskData={task} />
                            </React.Fragment>
                        );
                    })}
                </>
            ) : (
                <TaskCard loadingCard={true} />
            )}
        </div>
    );
}

export default TaskContainer;
