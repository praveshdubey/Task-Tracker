import React from 'react'
import TaskE from './TaskE'
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
        {tasks.map((task)=> (
        <TaskE key={task.id} task={task} 
        onDelete={onDelete} 
        onToggle={onToggle} />
    ))}
    </>
  )
}

export default Tasks