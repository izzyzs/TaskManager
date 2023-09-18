import React from "react";
import { TaskInterface } from "../../../../shared/TaskInterface";
import { modalBodyStylesFunc } from "../utils/utils";
import { ObjectId } from "mongodb";
import "./modalstyles.css";

interface ModalProps {
    isShown: boolean;
    setIsShown: (s: boolean) => void;
    task: TaskInterface;
}

const deleteTask = function (id: ObjectId) {
    const taskIdAsString: string = id.toString();
    fetch(`http://localhost:3001/api/tasks/${taskIdAsString}`, { method: "DELETE" })
        .then((response) => response.json())
        .catch((error) => console.error("Error deleting task: ", error));
};

function TaskDetailModal({ isShown, setIsShown, task }: ModalProps) {
    React.useEffect(
        function () {
            modalBodyStylesFunc(isShown);
        },
        [isShown]
    );

    return (
        <div
            className={`modal ${isShown ? "show" : "hide"} fade`}
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            onClick={
                isShown
                    ? () => {
                          setIsShown(false);
                      }
                    : () => {}
            }
        >
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 flex-grow-1" id="exampleModalLabel">
                            {task.name}
                        </h1>
                        {task.isImportant && <span className="emoji">{"\u203C"}</span>}
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                setIsShown(false);
                            }}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {task.short_description && <h2>{task.short_description}</h2>}
                        {task.task_body && <p>{task.task_body}</p>}
                    </div>
                    <div className="modal-footer justify-content-between flex-nowrap overflow-scroll">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={task.isCompleted && true} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Task Completed
                            </label>
                        </div>

                        <div>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setIsShown(false);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                    deleteTask(task._id);
                                    setIsShown(false);
                                    // deleteTaskCard();
                                }}
                            >
                                Delete
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskDetailModal;
