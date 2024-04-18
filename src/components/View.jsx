import React from 'react'
import { useTaskList } from '../hooks/useTaskList';
import { Task } from './Task';


export const View = () => {
  const { tasks } = useTaskList();
  console.log(tasks)
  return (
    tasks.map((task)=>{
      return <Task key={task.id} id={task.id} name={task.name} completed={task.completed} />
    })
  )
}
