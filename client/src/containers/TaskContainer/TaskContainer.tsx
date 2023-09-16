import React from "react";
import "./taskcontainer.css";
import { AddTaskCard, TaskCard } from "../../components";
import { TaskDataInterface } from "../../../../shared/TaskInterface";

interface TaskContainerProps {
    openAddModal: () => void;
    openDetailModal: () => void;
    allTasks: TaskDataInterface;
}

function TaskContainer({ openAddModal, openDetailModal, allTasks }: TaskContainerProps) {
    return (
        <div className="row container-fluid g-4 gy-5 text-center">
            <AddTaskCard openAddModal={openAddModal} />
            <>
                {allTasks.data.tasks.map(function (item, index) {
                    return (
                        <React.Fragment key={index}>
                            <TaskCard openTaskModal={openDetailModal} taskData={item} />
                        </React.Fragment>
                    );
                })}
            </>
        </div>
    );
}

export default TaskContainer;
