import React from "react";
import "../cardstyles.css";

function TaskCard() {
    return (
        <div className="card col-4">
            <div className="card-body">
                <h5 className="card-title">Task Title</h5>
                <p className="card-text">Card blurb Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reiciendis.</p>
                <div className="btn-group-vertical" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">
                        See Details
                    </button>
                    <button type="button" className="btn btn-primary">
                        Delete Task
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
