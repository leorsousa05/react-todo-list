import React, { useEffect, useState, useContext } from "react";
import TodoList from "../TodoList/TodoList";
import { TodoContext } from "../../hooks/useTodo";
import "./AllTodos.css"

function AllTodos() {
	const [tasks, setTasks] = useState([{ name: "", status: false }])
	const { tempTasks, setTempTasks, handleConclude, handleDesconclude, handleNewTask } = useContext(TodoContext)

	function handleDelete(key) {
		setTasks([...tasks.filter((task) => key !== tasks.indexOf(task))])
		setTempTasks([...tempTasks.filter((task) => key !== tempTasks.indexOf(task))])
	}

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify([...tempTasks]))
		setTasks(JSON.parse(localStorage.getItem("tasks")))
	}, [tempTasks])

	return (
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
									{task.status === true ? <li><s>{task.name}</s></li> : <li>{task.name}</li>}
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