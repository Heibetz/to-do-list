import React from 'react'
import './styles.css'
import { Todo } from '../Model';
import SingleToDo from './SingleToDo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleToDo key={todo.id}
        todo={todo}  
        todos={todos} 
        setTodos={setTodos}></SingleToDo>))}
    </div>
  )
}

export default ToDoList
