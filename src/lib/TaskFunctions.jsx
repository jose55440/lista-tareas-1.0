import { useTaskList } from "../hooks/useTaskList"

export const viewTask = () => {

  return (
    <div>Task</div>
  )
}

export const editTask = (id) => {
  return (
    <div>Task</div>
  )
}



export const toComplete = (id, tasks, setTasks) => {
  // const {removeTask} = useTaskList()
  // removeTask('1')
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
       task.completed= !task.completed
      }
    } )
  
  setTasks(newTasks)
}

