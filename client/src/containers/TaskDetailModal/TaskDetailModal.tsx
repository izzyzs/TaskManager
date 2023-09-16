import React from "react";
import { TaskInterface } from "../../../../shared/TaskInterface";
import { modalBodyStylesFunc } from "../utils/utils";

interface ModalProps {
    show: boolean;
    onHide: () => void;
    task: TaskInterface;
}

function TaskDetailModal({ show, onHide, task }: ModalProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(
        function () {
            modalBodyStylesFunc(isOpen);
        },
        [isOpen]
    );

    return (
        <div
            className={`modal ${show ? "show" : ""} fade modal-dialog modal-dialog-centered modal-dialog-scrollable`}
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 flex-grow-1" id="exampleModalLabel">
                            {task.name}
                        </h1>
                        {task.isImportant && <p>important</p>}
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={function () {
                                setIsOpen(false);
                            }}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {task.short_description && <h2>{task.short_description}</h2>}
                        {task.task_body && <p>{task.task_body}</p>}
                    </div>
                    <div className="modal-footer justify-content-between flex-nowrap overflow-scroll">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={task.isImportant && true} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Task Completed
                            </label>
                        </div>

                        <div>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>
                                Close
                            </button>
                            <button type="button" className="btn btn-danger">
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
