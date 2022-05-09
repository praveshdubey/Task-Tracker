import './App.css';
import './index.css';

// import { BrowserRouter as Routes , Route} from 'react-router-dom'
import HEader from './Components/HEader';
import Tasks from './Components/Tasks';
import {useState, useEffect} from 'react'
import Addtask from './Components/Addtask';
import Footer from './Components/Footer';
// import About from './Components/About';
function App() {
  const [ShowAddTask, setShowAddTask]=useState
  (true)
  const [tasks, setTasks]= useState([])

  useEffect(()=>{
    const getTasks = async () =>{
      const taskfromServer = await featchtasks()
      setTasks(taskfromServer)
    }
    getTasks()
  },[])
//featch data

const featchtasks = async() =>{
  const res= await fetch('http://localhost:5500/tasks')
  const data = await res.json()
  console.log("Response ........." , data)
  return data
}

//fecth single task
const featchtask = async(id) =>{
  const res= await fetch('http://localhost:5500/tasks')
  const data = await res.json()
  console.log("Response ........." , data)
  return data
}

//add task
const addTask=async (task)=>{
  const  res = await fetch('http://localhost:5500/tasks',{
    method : 'POST',
    headers :{
      'Content-type' : 'application/json'
    },
    body:JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks,data ])
// const id =Math.floor(Math.random()* 10000)+1
// const newTasks={id , ...task}
// setTasks([...tasks, newTasks])
}

//Delete task

const deleteTask= async (id) => {
  await fetch(`http://localhost:5500/tasks/${id}`,{
    method : 'DELETE',
  })

  setTasks(tasks.filter((task) => task.id !==id))
}

/* -------------------- toggle  Reminder Task ------------ */
const toggleReminder = async (id) =>{
  const taskToToggle = await featchtask(id)
  const upTask = {...taskToToggle,
   reminder : !taskToToggle.reminder
  }
  const res = await fetch(`http://localhost:5500/tasks/${id}`,{
    method : 'PUT',
    headers : {
      'Content-type' : 'application/json'
    },
    body:JSON.stringify(upTask)
  })

  const data = await res.json()
  console.log( "hiiiiii" ,id)

  setTasks(
    tasks.map((task)=>task.id === id ? { ...task, reminder: data.reminder } : task)
  )
}

  
  return (
    // <Routes >
    <div className="container">
      <HEader onAdd={()=> setShowAddTask(!ShowAddTask)} 
     ShowAddTask={ShowAddTask}
      />
     {ShowAddTask &&  <Addtask onAdd={addTask} />}
     {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> :  'OOPS ...... :( something went wrong'}
       {/* <Route path='/about' component={About}/> */}
      <Footer />
     </div>
    //  </Routes>
  
  );
}

export default App;
