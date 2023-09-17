import React from "react";
import "../cardstyles.css";
import { TaskInterface } from "../../../../shared/TaskInterface";

interface TaskCardProps {
    openTaskModal: (task: TaskInterface) => void;
    taskData: TaskInterface;
}

function TaskCard({ openTaskModal, taskData }: TaskCardProps) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">{taskData.name}</h5>
                    {/* This will be conditional on whdfether or not the task will be considered important */}
                    {taskData.isImportant && <span className="emoji">{"\u203C"}</span>}
                </div>
                <div className="card-body">
                    <p className="card-text">{taskData.short_description}</p>
                    <div className="btn-group-vertical" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={() => openTaskModal(taskData)}>
                            See Details
                        </button>
                        <button type="button" className="btn btn-primary">
                            Delete Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
