import "./modalstyles.css";
import React from "react";
import { addTask } from "../../services/taskService";
interface NecessaryForTask {
    name: string;
    shortDescription?: string;
    taskBody?: string;
    isImportant: boolean;
}

interface AddTaskModalProps {
    isShown: boolean;
    setIsShown: (s: boolean) => void;
    onSuccess: () => void;
}

function AddTaskModal({ isShown, setIsShown, onSuccess }: AddTaskModalProps) {
    const [formData, setFormData] = React.useState<NecessaryForTask>({
        name: "",
        shortDescription: "",
        taskBody: "",
        isImportant: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask(formData, onSuccess);
        setIsShown(false);
    };

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
            <div className="modal-dialog modal-dialog-scrollable" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 flex-grow-1" id="exampleModalLabel">
                            Add Task
                        </h1>
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
                    <div className="model-body p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="taskName" className="form-label">
                                    Title
                                </label>
                                <input type="text" className="form-control" id="taskName" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="taskShortDescription" className="form-label">
                                    Short Description
                                </label>
                                <textarea className="form-control" id="taskShortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange} rows={1}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="taskBody" className="form-label">
                                    Task Body
                                </label>
                                <textarea className="form-control" id="taskBody" name="taskBody" value={formData.taskBody} onChange={handleChange} rows={2}></textarea>
                            </div>
                            <div className="mb-3 flex">
                                <label htmlFor="taskIsImportant" className="form-label pe-2">
                                    Important?
                                </label>
                                <input className="form-check-input" type="checkbox" id="taskIsImportant" name="isImportant" checked={formData.isImportant} onChange={handleCheckboxChange} />
                                <div className="inline-flex justify-end">
                                    <button type="submit" className="ms-auto btn btn-primary" data-bs-dismiss="modal">
                                        Submit Task
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
