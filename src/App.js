
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
 const addTask=async(task)=>{
  const res=await fetch('http://localhost:2000/tasks',{
    method:"POST",
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(task)
  })
  const data= await res.json()
  setTasks([...tasks,data])
  // const id=Math.floor(Math.random()*100)+1;
  // const newTask={id,...task}
  // setTasks([...tasks,newTask])
 }
 const [showAddTask,setShowAddTask]=useState(true)
  const[tasks,setTasks]=useState([])
  useEffect(()=>{
   const getTask=async()=>{
    const tasksFromServer=await fetchTasks()
    setTasks(tasksFromServer)
   }
    getTask()
  },[])
   
  /// Fetch tasks
  const fetchTasks=async()=>{
    const res =await fetch('http://localhost:2000/tasks')
    const data=await res.json()
     return data
  }
  /// Fetch task
  const fetchTask=async(id)=>{
    const res =await fetch(`http://localhost:2000/tasks/${id}`)
    const data=await res.json()
     return data
  }
  return (
    <div className="container">
     <Header title='Task Tracker' showAddTask={showAddTask} onAdd={()=>setShowAddTask(!showAddTask)}/>
     {showAddTask&&<AddTask addTask={addTask}/>}
    {tasks.length>0 ? <Tasks tasks={tasks} setTasks={setTasks} fetchTask={fetchTask} />:'No Task To Show'}

    </div>
  );
}

export default App;
