import React from 'react'

export const Task = ({id,name,completed}) => {
  return (
    <div>
    {id}
    {name}
    {completed? '✔️':'⛔'}
    </div>
  )
}
