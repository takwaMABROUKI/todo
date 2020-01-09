import React from 'react'
import './task.css'
export default function Task(props) {
    return (
        <div className="reponse">
           <button onClick={()=>props.chan(props.index)}>  {props.complete ? 'undo' : 'Complete'}  </button> 
           <button onClick={()=> props.remove(props.index)}>  Delete   </button>
    <p className={props.complete ? "phrase":"p"} >{props.userText}</p>
        </div>
    )
}
