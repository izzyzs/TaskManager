import { Card, CardContent } from "@/components/ui/card";
// import "../cardstyles.css";

import { Button } from "@/components/ui/button";
interface AddTaskCardProps {
    openAddModal: () => void;
}

function AddTaskCard({ openAddModal }: AddTaskCardProps) {
    return (
        <Card className="h-full flex flex-col justify-center">
            <CardContent>
                <Button className="btn btn-primary " onClick={openAddModal}>
                    Add Task
                </Button>
            </CardContent>
        </Card>
    );
}

export default AddTaskCard;
