import React from "react";
import TodoList from "./TodoInputs/TodoList";
import { useTodo } from "../../hooks/useTodo";
import { PixelHeading } from "../ui/PixelHeading";
import { TaskList, TodoListContainer } from "./Style";
import TodoTask from "../ui/TodoTask";

function AllTodos() {
	const { handleNewTask, tasks } = useTodo()

	return (
		<div id="todo">
			<PixelHeading>To Do List</PixelHeading>
			<TodoListContainer>
				<TodoList todo={handleNewTask} />
				<TaskList>
					<ul>
						{tasks?.map((task, index) => {
							return (
								<TodoTask task={task} index={index}/>
							)
						})}
					</ul>
				</TaskList>
			</TodoListContainer>
		</div>
	)
}

export default AllTodos