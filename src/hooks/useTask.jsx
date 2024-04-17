import { create } from 'zustand';
import { viewTask, editTask } from '../lib/tasks'; // Asegúrate de que el nombre del archivo coincida con 'tasks'

export const useTaskList = create((set) => ({
    tasks: [], // Estado inicial de la lista de tareas
    // Función para agregar una nueva tarea a la lista
    addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
    // Función para eliminar una tarea de la lista
    removeTask: (taskIndex) => set((state) => ({ tasks: state.tasks.filter((_, index) => index !== taskIndex) })),
    // Función para ver detalles de una tarea
    viewTask: (taskId) => viewTask(taskId), // Asumiendo que viewTask toma un argumento taskId
    // Función para editar una tarea
    editTask: (taskId, updatedTask) => editTask(taskId, updatedTask), // Asumiendo que editTask toma dos argumentos: taskId y updatedTask
}));
