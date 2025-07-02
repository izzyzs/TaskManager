import type { TaskInterface } from "../../../../shared/TaskInterface";
import "./modalstyles.css";

import { deleteTask } from "@/services/taskService";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ModalProps {
    isShown: boolean;
    setIsShown: (s: boolean) => void;
    task: TaskInterface;
    onSuccess: () => void;
}

function TaskDetailModal({ isShown, setIsShown, task, onSuccess }: ModalProps) {
    // React.useEffect(
    //     function () {
    //         modalBodyStylesFunc(isShown);
    //     },
    //     [isShown]
    // );

    return (
        <Dialog open={isShown} onOpenChange={setIsShown}>
            <DialogContent
                className="text-center"
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
                            {task.name}
                        </h1>
                        {task.isImportant && <span className="emoji">{"\u203C"}</span>}
                        {/* <Button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                setIsShown(!isShown);
                            }}
                        ></Button> */}
                    </DialogHeader>

                    {task.shortDescription && <h2 className="py-1">{task.shortDescription}</h2>}
                    {task.taskBody && <p className="py-2">{task.taskBody}</p>}

                    <DialogFooter>
                        <div className="form-check">
                            <Label className="form-check-label" htmlFor="flexCheckDefault">
                                Task Completed
                            </Label>
                            <Input className="form-check-input" type="checkbox" checked={task.isCompleted && true} id="flexCheckDefault" />
                        </div>

                        <div>
                            <Button
                                type="button"
                                className="btn btn-secondary mx-1"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setIsShown(false);
                                }}
                            >
                                Close
                            </Button>
                            <Button
                                type="button"
                                className="btn btn-danger mx-1"
                                onClick={() => {
                                    deleteTask(task.id, onSuccess);
                                    setIsShown(false);
                                }}
                            >
                                Delete
                            </Button>
                            <Button type="button" className="btn btn-primary mx-1">
                                Save changes
                            </Button>
                        </div>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default TaskDetailModal;
