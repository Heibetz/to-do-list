import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../Model';
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import './styles.css'
import ToDoList from './ToDoList';
import { userInfo } from 'os';

/**
 * @author Hank Heiselbetz
 * SingleToDo creates a single to do list item that contains edit, delete, and finish
 */

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleToDo = ({todo, todos, setTodos}: Props) => {
    //creates an edit state to edit a task, check if is in editing state
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    /**
     * When the Check mark is clicked, the item gets crossed off or vise versa
     * @param id 
     */
    const handleDone = (id:number) => {
        setTodos(
            todos.map((todo)=>
            todo.id === id? {...todo, isDone: !todo.isDone} : todo
    ));};

    /**
     * Uses the .filter method to remove a task if the ID's match
     * @param id 
     */
    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) => ( todo.id===id? {...todo, todo:editTodo} : todo)))
        setEdit(false)
    }

    //Shifts the focus to the edit bar when the edit button is presse
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

  return (
    <form className='single-todos' onSubmit={(e)=>handleEdit(e,todo.id)}>
        {edit ? (
            <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} 
            className='single-todos-text' />
        ) : todo.isDone ? (
                <s className='single-todos-text'>{todo.todo}</s>
            ) : (
                <span className='single-todos-text'>{todo.todo}</span>
        )}

      <div>
        <span className="icon" onClick={()=>{
            if(!edit && !todo.isDone){
                setEdit(!edit)
            }}}> <AiFillEdit /> </span>
        <span className="icon" onClick={()=>handleDelete(todo.id)}> <AiFillDelete /> </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}> <MdDone /> </span>
      </div>

    </form>
  )
}

export default SingleToDo
