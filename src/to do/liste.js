import React from 'react'
import Task from './task';

export default function Liste(props) {
    return (
        <div>
        
{props.list.map((el, i) => {
            return <Task key={i} userText={el.tache} complete={el.isComplete} remove={props.removefunc} index={i} chan={props.change} />;
             })}
        </div>
    )
}
