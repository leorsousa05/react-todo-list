import React, { useState, useContext, createContext } from 'react'

export const TodoContext = createContext() // Todo context

export const TodoContextProvider = ({ children }) => { // Todo provider
    const [tempTasks, setTempTasks] = useState(JSON.parse(localStorage.getItem("tasks")))

    const handleNewTask = (task) => { // handle new tasks
        let tempTask = {name: task, status: false}
        setTempTasks(() => tempTasks ? [...tempTasks, tempTask] : [tempTask])
    }

    function handleConclude(key) { // Conclude tasks
        setTempTasks(tempTasks.map((task) => key === tempTasks.indexOf(task) ? {name: task.name, status: true} : {name: task.name, status: task.status} ));
    }

    function handleDesconclude(key) { // Desconclude tasks
        setTempTasks(tempTasks.map((task) => key === tempTasks.indexOf(task) ? {name: task.name, status: false} : {name: task.name, status: task.status}))
    }

    return (
        <TodoContext.Provider value={{ tempTasks, setTempTasks, handleConclude, handleDesconclude, handleNewTask }} >
            {children}
        </TodoContext.Provider>
    )
}

export function useTodo() { // hook useTodo
    const context = useContext(TodoContext)
    return context
}