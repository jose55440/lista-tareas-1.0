import { create } from 'zustand';
import { viewTask, editTask, toComplete } from '../lib/TaskFunctions';
import { v4 as uuidv4 } from 'uuid';

export const useTaskList = create((set,get ) => ({
  tasks: [{
    id: uuidv4(),
    name: 'Tarea 1',
    completed: false
  }],

  addTask: (name) => set((state) => ({ tasks: [...state.tasks, {
    id: uuidv4(), 
    name, 
    completed: false 
  }] })),

  removeTask: (taskId) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== taskId)
  })),
  
   viewTask: (taskId) =>
    get().tasks.find(task => task.id === taskId),

  editTask: (taskId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    })),

  toComplete: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    })),
}));