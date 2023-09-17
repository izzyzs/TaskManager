import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, TaskContainer, TaskDetailModal, AddTaskModal } from "./containers";
import { TaskInterface, TaskDataInterface } from "../../shared/TaskInterface.ts";

function App() {
    // const [showAddModal, setShowAddModal] = React.useState(false);
    // const [addModalContent, setAddModalContent] = React.useState({});

    // const openAddModal = function () {
    //     setShowAddModal(true);
    // };

    // const closeAddModal = () => {
    //     setShowAddModal(false);
    // };

    const [taskData, setTaskData] = React.useState<TaskInterface>({ name: "Empty Task", isCompleted: false, isImportant: false });

    const [showTaskDetailModal, setShowTaskDetailModal] = React.useState(false);

    const openTaskDetailModal = function (task: TaskInterface) {
        setShowTaskDetailModal(true);
        setTaskData(task);
    };

    const [showAddTaskModal, setShowAddTaskModal] = React.useState(false);

    const openAddTaskModal = function () {
        setShowAddTaskModal(true);
    };

    return (
        <div className="App">
            {/* <Form /> */}
            <Header />
            <TaskDetailModal isShown={showTaskDetailModal} setIsShown={setShowTaskDetailModal} task={taskData} />
            <AddTaskModal />
            <TaskContainer openAddModal={openAddTaskModal} openTaskModal={openTaskDetailModal} />
        </div>
    );
}

export default App;
