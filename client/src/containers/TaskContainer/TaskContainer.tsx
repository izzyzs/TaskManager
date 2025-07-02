import React from "react";
import "./taskcontainer.css";
// import AddTaskCard from "@/custom-components/AddTaskCard/AddTaskCard";
// import TaskCard from "@/custom-components/TaskCard/TaskCard";
import { AddTaskCard, TaskCard } from "@/custom-components";
// import { AddTaskCard, TaskCard } from "@/custom-components/AddTaskCard";
import type { TaskInterface, TaskDataInterface } from "../../../../shared/TaskInterface";

interface TaskContainerProps {
    openAddModal: () => void;
    openTaskModal: (task: TaskInterface) => void;
    taskData: TaskDataInterface | undefined;
    onSuccess: () => void;
}

function TaskContainer({ openAddModal, openTaskModal, taskData, onSuccess }: TaskContainerProps) {
    const [allTasks, setAllTasks] = React.useState<TaskDataInterface | null>(null);
    React.useEffect(() => {
        taskData && setAllTasks(taskData);
    }, [taskData]);

    return (
        <div className="text-center grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-4">
            <AddTaskCard openAddModal={openAddModal} />
            {allTasks ? (
                <>
                    {allTasks.data.tasks.map(function (task) {
                        return (
                            <React.Fragment key={task.id}>
                                <TaskCard loadingCard={false} openTaskModal={openTaskModal} taskData={task} onSuccess={onSuccess} />
                            </React.Fragment>
                        );
                    })}
                </>
            ) : (
                <TaskCard loadingCard={true} onSuccess={onSuccess} />
            )}
        </div>
    );
}

export default TaskContainer;
