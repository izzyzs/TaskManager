import "./modalstyles.css";
import React from "react";
import { addTask } from "../../services/taskService";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
        <Dialog open={isShown} onOpenChange={setIsShown}>
            <DialogContent
                // className={`modal ${isShown ? "show" : "hide"} fade`}
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
                    <DialogHeader>
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
                    </DialogHeader>
                    <div className="model-body p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <Label htmlFor="taskName" className="form-label">
                                    Title
                                </Label>
                                <Input type="text" className="form-control" id="taskName" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <Label htmlFor="taskShortDescription" className="form-label">
                                    Short Description
                                </Label>
                                <Textarea className="form-control" id="taskShortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange} rows={1}></Textarea>
                            </div>
                            <div className="mb-3">
                                <Label htmlFor="taskBody" className="form-label">
                                    Task Body
                                </Label>
                                <Textarea className="form-control" id="taskBody" name="taskBody" value={formData.taskBody} onChange={handleChange} rows={2}></Textarea>
                            </div>
                            <div className="mb-3 flex">
                                <Label htmlFor="taskIsImportant" className="form-label pe-2">
                                    Important?
                                </Label>
                                <Input className="form-check-input" type="checkbox" id="taskIsImportant" name="isImportant" checked={formData.isImportant} onChange={handleCheckboxChange} />
                                <div className="inline-flex justify-end">
                                    <Button type="submit" className="ms-auto btn btn-primary" data-bs-dismiss="modal">
                                        Submit Task
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default AddTaskModal;
