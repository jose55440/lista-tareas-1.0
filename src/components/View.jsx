import React from 'react'
import { useTaskList } from '../hooks/useTaskList';
import { Task } from './Task';


export const View = () => {
  const { tasks,removeTask,toComplete } = useTaskList();
  
  return (
    tasks.map((task)=>{
      return <Task key={task.id} id={task.id} name={task.name} completed={task.completed}  removeTask={removeTask} toComplete={toComplete}  />
    })
  )
}
