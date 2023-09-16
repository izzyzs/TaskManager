import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, TaskContainer, TaskDetailModal, AddTaskModal } from "./containers";
import { TaskInterface, TaskDataInterface } from "../../shared/TaskInterface.ts";

function App() {
    const [allTasks, setAllTasks] = React.useState<TaskDataInterface | null>(null);
    React.useEffect(function () {
        fetch("/api/tasks")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setAllTasks(data);
            })
            .catch(function (error) {
                console.error("Error fetching data: ", error);
            });
    });
    const [showAddModal, setShowAddModal] = React.useState(false);
    const [addModalContent, setAddModalContent] = React.useState({});

    const openAddModal = function () {
        setShowAddModal(true);
    };

    const closeAddModal = () => {
        setShowAddModal(false);
    };

    const [showTaskDetailModal, setShowTaskDetailModal] = React.useState(false);
    const [taskDetailModalContent, setTaskDetailModalContent] = React.useState({});

    const openTaskDetailModal = function () {
        setShowTaskDetailModal(true);
    };

    const closeTaskDetailModal = () => {
        setShowTaskDetailModal(false);
    };

    return (
        <div className="App">
            {/* <Form /> */}
            <Header />
            {/* <TaskDetailModal onHide={closeTaskDetailModal} /> */}
            {/* <AddTaskModal onHide={closeAddModal} /> */}
            {allTasks ? <TaskContainer openAddModal={openAddModal} openDetailModal={openTaskDetailModal} allTasks={allTasks} /> : <h3>loading last data...</h3>}
        </div>
    );
}

export default App;
