// import React from 'react'
// import {FaTimes} from 'react-icons/fa'

// const TaskE = ({task, onDelete, onToggle}) => {
//   return (
  
//     <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(task.id)}> 
//     <h3>{task.text} <FaTimes  style={{color :'purple' , cursor : 'pointer'}} onClick={()=>onDelete(task.id)}/>
//     </h3><p>{task.day}</p></div>
//   )
// }

// export default TaskE
import React from 'react'
import {FaTimes} from 'react-icons/fa'

const TaskE = ({task , onDelete , onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(task.id)}> <h3>{task.text} <FaTimes  style={{color :'#136e36;' , cursor : 'pointer'}} onClick={()=>onDelete(task.id)}/></h3><p>{task.day}</p></div>
  )
}

export default TaskE