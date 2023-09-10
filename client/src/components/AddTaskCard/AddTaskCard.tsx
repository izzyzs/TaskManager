import React from "react";
import "../cardstyles.css";

function AddTaskCard() {
    return (
        <div id="add-task" className="card col-4">
            <div className="card-body">
                <a href="#" className="btn btn-primary">
                    ADD TASK
                </a>
            </div>
        </div>
    );
}

export default AddTaskCard;
