import React from "react";
import "./taskcontainer.css";
import { AddTaskCard, TaskCard } from "../../components";
import { TaskInterface, TaskDataInterface } from "../../../../shared/TaskInterface";
import { loadTasks } from "../../services/taskService";

interface TaskContainerProps {
    openAddModal: () => void;
    openTaskModal: (task: TaskInterface) => void;
    setIsSuccessfulDeleteProp: (d: boolean) => void;
    isSuccessfulDelete: boolean;
    initialData: TaskDataInterface | undefined;
}

function TaskContainer({ openAddModal, openTaskModal, isSuccessfulDelete, initialData }: TaskContainerProps) {
    const [allTasks, setAllTasks] = React.useState<TaskDataInterface | null>(null);
    React.useEffect(() => {
        initialData && setAllTasks(initialData);
    }, []);

    React.useEffect(
        function () {
            if (isSuccessfulDelete) {
                loadTasks(setAllTasks);
            }
        },
        [isSuccessfulDelete]
    );

    return (
        <div className="row container-fluid g-4 gy-5 text-center">
            <AddTaskCard openAddModal={openAddModal} />
            {allTasks ? (
                <>
                    {allTasks.data.tasks.map(function (task) {
                        return (
                            <React.Fragment key={task.id}>
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
