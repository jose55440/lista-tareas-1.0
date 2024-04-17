import { create } from 'zustand';

export const useTaskList = create((set) => ({
    tasks: [], // Estado inicial de la lista de tareas
    // Función para agregar una nueva tarea a la lista
    addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
    // Función para eliminar una tarea de la lista
    removeTask: (taskIndex) => set((state) => ({ tasks: state.tasks.filter((_, index) => index !== taskIndex) })),
  }));