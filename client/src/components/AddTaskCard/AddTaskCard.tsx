import React from "react";
import "../cardstyles.css";
import TaskInterface from "../../TaskInterface";

interface AddTaskCardProps {
    openAddModal: () => void;
}

function AddTaskCard({ openAddModal }: AddTaskCardProps) {
    return (
        <div id="add-task" className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-body">
                    <button className="btn btn-primary" onClick={openAddModal}>
                        ADD TASK
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskCard;
