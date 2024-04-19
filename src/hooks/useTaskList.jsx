import { create } from 'zustand';
import { viewTask, editTask, toComplete } from '../lib/TaskFunctions'; // Asegúrate de que el nombre del archivo coincida con 'tasks'
import { v4 as uuidv4 } from 'uuid';

export const useTaskList = create((set) => ({
    
    tasks: [{
        id: uuidv4(),
        name: 'Tarea 1',
        completed: false
    }], // Estado inicial de la lista de tareas
    // Función para agregar una nueva tarea a la lista
    addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
    // Función para eliminar una tarea de la lista
   removeTask: (taskId) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== taskId)
    })),
    // Función para ver detalles de una tarea
    viewTask: (taskId) => viewTask(taskId), // Asumiendo que viewTask toma un argumento taskId
    // Función para editar una tarea
    editTask: (taskId, updatedTask) => editTask(taskId, updatedTask), // Asumiendo que editTask toma dos argumentos: taskId y updatedTask
    // Setter para actualizar el array de tareas
    setTasks: (newTasks) => set({ tasks: newTasks }),

    toComplete: (taskId) => toComplete(taskId),
    
    
}));
