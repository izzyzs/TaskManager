import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, TaskContainer } from "./containers";

function App() {
    return (
        <div className="App">
            <Header />
            <TaskContainer />
        </div>
    );
}

export default App;
