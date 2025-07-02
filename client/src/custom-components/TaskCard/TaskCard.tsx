import "../cardstyles.css";
import type { TaskInterface } from "../../../../shared/TaskInterface";

import { deleteTask } from "@/services/taskService";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TaskCardProps {
    openTaskModal?: (task: TaskInterface) => void;
    taskData?: TaskInterface;
    loadingCard: boolean;
    onSuccess: () => void;
}

function TaskCard({ openTaskModal, taskData, loadingCard, onSuccess }: TaskCardProps) {
    return !loadingCard ? (
        taskData && openTaskModal ? (
            <Card className="h-full">
                <CardHeader>
                    <CardTitle>{taskData.name}</CardTitle>
                    {/* This will be conditional on whdfether or not the task will be considered important */}
                    {taskData.isImportant && <span className="emoji">{"\u203C"}</span>}
                </CardHeader>
                <CardContent>
                    <p className="card-text">{taskData.shortDescription}</p>
                    <div className="flex flex-col" role="group" aria-label="Basic example">
                        <Button type="button" className="mx-2 my-1" onClick={() => openTaskModal(taskData)}>
                            See Details
                        </Button>
                        <Button
                            type="button"
                            className="mx-2 my-1"
                            onClick={() => {
                                deleteTask(taskData.id, onSuccess);
                            }}
                        >
                            Delete Task
                        </Button>
                    </div>
                </CardContent>
            </Card>
        ) : (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <Card>
                    <CardContent>
                        <p>There are no tasks :(</p>
                    </CardContent>
                </Card>
            </div>
        )
    ) : (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <Card>
                <CardContent>
                    <p>Loading task cards...</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default TaskCard;
