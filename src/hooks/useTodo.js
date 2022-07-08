import { isEmptyObject } from 'jquery';
import React, { useState, useContext, createContext, Children } from 'react'; // eslint-disable-line

export const TodoContext = createContext()

export const TodoContextProvider = ({ children }) => {
    const [tempTasks, setTempTasks] = useState(JSON.parse(localStorage.getItem("tasks")))

    const handleNewTask = (task) => {
        let tempTask = {name: task, status: false}
        isEmptyObject(tempTasks) ? setTempTasks([tempTask]) : setTempTasks([...tempTasks, tempTask])
    }

    function handleConclude(key) {
        setTempTasks(tempTasks.map((task) => key === tempTasks.indexOf(task) ? {name: task.name, status: true} : {name: task.name, status: false}))
    }

    function handleDesconclude(key) {
        setTempTasks(tempTasks.map((task) => key === tempTasks.indexOf(task) ? {name: task.name, status: false} : {name: task.name, status: false}))
    }

    return (
        <TodoContext.Provider value={{ tempTasks, setTempTasks, handleConclude, handleDesconclude, handleNewTask }} >
            {children}
        </TodoContext.Provider>
    )
}
