import React, { useState } from 'react';
import { create } from 'zustand';

// Creamos un hook de zustand llamado useTaskList
const useTaskList = create((set) => ({
  tasks: [], // Estado inicial de la lista de tareas
  // Función para agregar una nueva tarea a la lista
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  // Función para eliminar una tarea de la lista
  removeTask: (taskIndex) => set((state) => ({ tasks: state.tasks.filter((_, index) => index !== taskIndex) })),
}));

// Componente Counter que muestra el contador y el botón para incrementarlo
export function Counter() {
  // Usamos el hook useTaskList para obtener el estado "tasks" y las funciones "addTask" y "removeTask"
  const { tasks, addTask, removeTask } = useTaskList();
  const [newTaskText, setNewTaskText] = useState('');

  // Función para manejar el envío del formulario y agregar una nueva tarea
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskText);
    setNewTaskText(''); // Limpiar el campo después de agregar la tarea
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            {/* Botón para eliminar la tarea, que llama a la función removeTask con el índice de la tarea */}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {/* Formulario para agregar una nueva tarea */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
}