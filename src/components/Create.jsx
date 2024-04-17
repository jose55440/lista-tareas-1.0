import React, { useState } from 'react'
import {useTask} from '../hooks/useTask'
import { v4 as uuidv4 } from 'uuid';
export const Create = () => {
  const [addTask] = useTask
  const [input, setInput] = useState('');
  const handleInput = e =>{
      setInput(e.target.value)  
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newTask={
      id: uuidv4(),
      name: input,
      complited: false
    };
    addTask(newTask); // Agrega la nueva tarea al estado
    setInput(''); // Limpia el campo de entrada después de agregar la tarea
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" id="text" onChange={handleInput} />
    </form>
  )
}
