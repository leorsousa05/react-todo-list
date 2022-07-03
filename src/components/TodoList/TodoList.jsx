import React, { useState } from "react";
import "./TodoList.css"

/* Controlled Form */

/* No React ao invés de pegarmos o resultado só
pelo input, nós controlamos o form. */
const TodoList = (props) => {

    /* Primeiro criamos um state, e damos um state
    inicial com o valor */
    const [task, setTask] = useState({
        task: ""
    });

    /* Criamos também um handleChange para cuidar
    da mundança do input e falamos para ele alterar
    conforme o input */
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
        <form id="todolist-inputs" onSubmit={handleSubmit} >
            <div id="todo-container">
                {/* E aqui no input colocamos o valor recebido pelo handleChange por conta
                da troca. */}
                <input placeholder="Insira Sua Tarefa" type="text" value={task.task} id="input-text" onChange={handleChange} />
                <button type="submit">Inserir</button>
            </div>
        </form>
    )
}

export default TodoList