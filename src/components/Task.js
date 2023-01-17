import React from 'react';
import {FaTimes} from 'react-icons/fa'

const Task = ({task,deleteTask, onToggle}) => {
  
    return (
        <div className={`task ${task.reminder?'reminder':''}`}onDoubleClick={()=>onToggle(task.id)}>
            <h3 onClick={()=>deleteTask(task.id)}>{task.text} <FaTimes style={{color:"red", cursor:'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;