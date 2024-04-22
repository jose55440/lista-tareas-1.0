import React, { useState } from 'react';
import { useTaskList } from '../hooks/useTaskList';
import { Task } from './Task';

export const View = () => {
  const { tasks, removeTask, toComplete, addTask } = useTaskList();
  const [newTaskName, setNewTaskName] = useState('');

  const handleNewTaskNameChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== '') {
      addTask({ id: Date.now(), name: newTaskName, completed: false });
      setNewTaskName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskName}
        onChange={handleNewTaskNameChange}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          removeTask={removeTask}
          toComplete={toComplete}
        />
      ))}
    </div>
  );
};
