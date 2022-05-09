import React from 'react'
import {useState} from 'react'


const Addtask = ({onAdd}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('please add task ')
            return
        }

        onAdd({text, day , reminder})

        setText('')
        setDay('')
        setReminder(true)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add task' value={text} onChange={(e)=> setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Day and time</label>
            <input type='text' placeholder='Add Day and time' value={day} onChange={(e)=> setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>set reminder</label>
            <input type='checkbox' checked={reminder}  value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='Submit' className='btn btn-block' value='SAVE CONCERT' />
    </form>
  )
}

export default Addtask