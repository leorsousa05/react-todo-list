import React, { useEffect, useState } from "react";
import TodoList from "../TodoList/TodoList";
import "./AllTodos.css"

function AllTodos() {
    const [tasks, setTasks] = useState([{name: "", status: false}])

    function handleNewTask(task) {
        let tempTask = {name: task, status: false}
        setTasks([...tasks, tempTask])
    }

    function temporaryVariable(task) {
        let tempTask = {name: task, status: false}
        return tempTask
    }
    
    function handleDelete(key) {
        setTasks([...tasks.filter((task) => key !== tasks.indexOf(task))])
    }

    function handleConclude(key) {
        setTasks(tasks.map((task) => key === tasks.indexOf(task) ? {name: task.name, status: true} : {name: task.name, status: false}))
    }

    function handleDesconclude(key) {
        setTasks(tasks.map((task) => key === tasks.indexOf(task) ? {name: task.name, status: false} : {name: task.name, status: false}))
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify([...tasks, tempVar]))
    }, [tasks])

    return(
        <div id="todo">
            <h1>To Do List</h1>
            <div id="todo-list-container">
                <TodoList todo={handleNewTask} tasks={temporaryVariable} />
                <div id="todo-list">
                    <ul>
                        {tasks.map((task, index) => {
                            return ( 
                            task.name !== "" &&
                                <div className="todo-item"> 
                                    {task.status === true ? <li key={index}><s>{task.name}</s></li> : <li key={index}>{task.name}</li> }
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