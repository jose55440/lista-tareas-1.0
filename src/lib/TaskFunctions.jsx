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



export const toComplete = (id)=>{
  
  const {tasks,setTasks} = useTaskList();
  const newTasks=tasks.map((task) => {
    if (task.id == id) {
        task.completed=!task.completed
        console.log(task.id)
    }
  })
  setTasks(newTasks) 



}
