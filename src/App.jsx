import React from "react"
import ToDoList from "./components/ToDoList";

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (<div className="container-fluid p-3 d-flex flex-row">
    
        <ToDoList />

    </div>
)}

export default App;