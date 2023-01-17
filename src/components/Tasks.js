
import Task from './Task';

const Tasks = ({tasks,setTasks,fetchTask}) => {
    const deleteTask=async(id)=>{
        await fetch(`http://localhost:2000/tasks/${id}`,{
        method:'DELETE'
        })
    setTasks(tasks.filter((task)=>task.id!==id))
    }
    const onToggle=async(id)=>{
        const taskToUpdate=await fetchTask(id)
        var updateTask= {...taskToUpdate,reminder:!taskToUpdate.reminder}
        const res=await fetch(`http://localhost:2000/tasks/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(updateTask)
        })
        const data=await res.json()
        setTasks(tasks.map((task)=>task.id===id?{...task,reminder:data.reminder}:task))
    }

 return (
        <>
            {
                tasks.map((task)=>(<Task key={task.id} onToggle={ onToggle} deleteTask={deleteTask} task={task}/>))
            }
        </>
    );
};

export default Tasks;