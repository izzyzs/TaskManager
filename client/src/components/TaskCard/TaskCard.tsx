import React from "react";
import "../cardstyles.css";
import { TaskInterface } from "../../../../shared/TaskInterface";

interface TaskCardProps {
    openTaskModal: () => void;
    taskData: TaskInterface;
}

function TaskCard({ openTaskModal, taskData }: TaskCardProps) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Task Title</h5>
                    {/* This will be conditional on whdfether or not the task will be considered important */}
                    <span className="emoji">{"\u203C"}</span>
                </div>
                <div className="card-body">
                    <p className="card-text">Card blurb Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reiciendis.</p>
                    <div className="btn-group-vertical" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={openTaskModal}>
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
