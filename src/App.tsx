import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import {Todo} from './Model';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false}])
      setTodo("");
    }

  }

  return (
    <div className="App">
      <span className="heading">To-Do-List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
      {todos.map((t) => (
        <></>
      ))}

    </div>
  );
}

export default App;
