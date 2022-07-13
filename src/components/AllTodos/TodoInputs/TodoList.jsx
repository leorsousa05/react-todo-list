import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import "./Style.jsx"
import { TodoForm } from "./Style.jsx";

const TodoList = (props) => {

    const [task, setTask] = useState({
        task: ""
    });

    const handleChange = (event) => {
        setTask({
            task: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.todo(task.task)
        setTask({task: ""})
    }

    return(
        <TodoForm onSubmit={handleSubmit}>
                <Input placeholder="Insira Sua Tarefa" type="text" value={task.task} onChange={handleChange} />
                <Button type="submit">Inserir</Button>
        </TodoForm>
    )
}

export default TodoList