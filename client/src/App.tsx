import React, { useEffect } from "react";
import "./App.css";
import { Header, TaskContainer, TaskDetailModal, AddTaskModal } from "./containers";
import type { TaskInterface, TaskDataInterface } from "../../shared/TaskInterface.ts";
import { loadTasks } from "./services/taskService.ts";

function App() {
    const [allTasksData, setAllTasksData] = React.useState<TaskDataInterface>();
    const [refreshTrigger, setRefreshTrigger] = React.useState(0);
    // const [showAddModal, setShowAddModal] = React.useState(false);
    // const [addModalContent, setAddModalContent] = React.useState({});

    // const openAddModal = function () {
    //     setShowAddModal(true);
    // };

    // const closeAddModal = () => {
    //     setShowAddModal(false);
    // };

    // *****************
    // TASK DETAIL MODAL
    // *****************

    const [taskData, setTaskData] = React.useState<TaskInterface>({ id: 0, name: "Empty Task", isCompleted: false, isImportant: false, isDeleted: false });
    const [showTaskDetailModal, setShowTaskDetailModal] = React.useState(false);

    const openTaskDetailModal = function (task: TaskInterface) {
        setShowTaskDetailModal(true);
        setTaskData(task);
    };

    // **************
    // ADD TASK MODAL
    // **************

    const [showAddTaskModal, setShowAddTaskModal] = React.useState(false);
    const openAddTaskModal = function () {
        setShowAddTaskModal(true);
    };

    // **********************************
    // HANDLING SUCCESSFUL DELETE REQUEST
    // **********************************

    const [handleSuccesfulDelete, setHandleSuccesfulDelete] = React.useState(false);

    useEffect(() => {
        loadTasks(setAllTasksData);
    }, [refreshTrigger]);

    return (
        <div className="App">
            <Header />
            <TaskDetailModal isShown={showTaskDetailModal} setIsShown={setShowTaskDetailModal} task={taskData} onSuccess={() => setRefreshTrigger((prev) => prev + 1)} />
            <AddTaskModal isShown={showAddTaskModal} setIsShown={setShowAddTaskModal} onSuccess={() => setRefreshTrigger((prev) => prev + 1)} />
            <TaskContainer
                openAddModal={openAddTaskModal}
                openTaskModal={openTaskDetailModal}
                setIsSuccessfulDeleteProp={setHandleSuccesfulDelete}
                isSuccessfulDelete={handleSuccesfulDelete}
                taskData={allTasksData}
            />
        </div>
    );
}

export default App;
