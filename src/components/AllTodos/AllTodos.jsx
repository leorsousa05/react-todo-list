import { isEmptyObject } from "jquery";
import React, { useEffect, useState } from "react";
import TodoList from "../TodoList/TodoList";
import "./AllTodos.css"

function AllTodos() {
    const [tasks, setTasks] = useState([{name: "", status: false}])
    const [tempTasks, setTempTasks] = useState(JSON.parse(localStorage.getItem("tasks")))

    function handleNewTask(task) {
        let tempTask = {name: task, status: false}
        isEmptyObject(tempTasks) ? setTempTasks([tempTask]) : setTempTasks([...tempTasks, tempTask])
    }
    
    function handleDelete(key) {
        setTasks([...tasks.filter((task) => key !== tasks.indexOf(task))])
        setTempTasks([...tempTasks.filter((task) => key !== tempTasks.indexOf(task))])
    }

    function handleConclude(key) {
        setTempTasks(tempTasks.map((task) => key === tempTasks.indexOf(task) ? {name: task.name, status: true} : {name: task.name, status: false}))
    }

    function handleDesconclude(key) {
        setTempTasks(tempTasks.map((task) => key === tempTasks.indexOf(task) ? {name: task.name, status: false} : {name: task.name, status: false}))
    }

    useEffect(() => {
        console.log(tempTasks)
        tempTasks !== null && localStorage.setItem("tasks", JSON.stringify([...tempTasks]))
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [tempTasks])

    return(
        <div id="todo">
            <h1>To Do List</h1>
            <div id="todo-list-container">
                <TodoList todo={handleNewTask} />
                <div id="todo-list">
                    <ul>
                        {tasks !== null && tasks.map((task, index) => {
                            return (
                            task.name !== "" &&
                                <div key={index} className="todo-item"> 
                                    {task.status === true ? <li><s>{task.name}</s></li> : <li>{task.name}</li> }
                                    <div className="button-group">
                                        <button onClick={event => handleDelete(index)}>Delete</button>
                                        <p> - </p>
                                        <button onClick={task.status === false ? event => handleConclude(index) : event => handleDesconclude(index)}>{task.status === true ? "Desmarcar" : "Concluir"}</button>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AllTodos