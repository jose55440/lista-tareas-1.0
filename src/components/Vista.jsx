import React from 'react'
import { useParams } from 'react-router-dom';
export const Vista = () => {
    const { task } = useParams();


  return (
    <div>Vista</div>
  )
}
