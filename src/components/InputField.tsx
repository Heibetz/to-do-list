import React, { useReducer, useRef } from 'react'
import "./styles.css"

/**
 * @Author Hank Heiselbetz
 * InputField creates the input field bar for entering a task
 */

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e: React.FormEvent)=> void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  //Hooking particular components for HTML
  //In this case, it is focusing and unfocusing from the enter a task input
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className="input" 
    onSubmit={(e)=> {
      handleAdd(e) //When go is pressed, the to-do-list unfocuses on enter a task
      inputRef.current?.blur()   
    }}>
      <input 
      ref = {inputRef}
      type="input"
      value = {todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder='Enter a task' className='task-input'></input> 
      <button type='submit' className='submit-input'>GO</button>
    </form>
  );
}

export default InputField;
