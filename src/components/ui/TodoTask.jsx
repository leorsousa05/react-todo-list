import React from 'react';
import styled from "styled-components"
import { useTodo } from '../../hooks/useTodo';
import { Button } from './Button';

const StyledTask = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  border-bottom: 1px solid #5315fc32;
  font-size: 1rem;
  font-family: "block-font";

  s {
    color: #014a01;
  }
`

const ButtonGroup = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-family: sans-serif;
    padding: 0 6px;
  }

  .buttons {
    padding: .5rem !important;
    width: 100%;
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column-reverse;

    .buttons {
      margin: .2rem;
      font-size: 10px;
    }

    p {
      display: none;
    }
  }
`

const TaskItem = styled.p`
  display: flex;
  place-items: center;
`

const TodoTask = (props) => {
	const { tempTasks, setTempTasks, handleConclude, handleDesconclude } = useTodo()

  const handleDelete = (key) => {
		setTempTasks([...tempTasks.filter((task) => key !== tempTasks.indexOf(task))])
	}

  return (
    <StyledTask>
      {props.task.status === true ? <TaskItem><s>{props.task.name}</s></TaskItem> : <TaskItem>{props.task.name}</TaskItem>}
        <ButtonGroup>
          <Button className='buttons' onClick={event => handleDelete(props.index)}>Delete</Button>
          <p> - </p>
          <Button className="buttons" onClick={props.task.status === false ? event => handleConclude(props.index) : event => handleDesconclude(props.index)}>{props.task.status === true ? "Desmarcar" : "Concluir"}</Button>
        </ButtonGroup>
    </StyledTask>
  );
}

export default TodoTask;
