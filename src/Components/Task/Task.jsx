import React from "react";
import './Task.css';

let Task = (props) =>{
  let clazz = '';

  if(props.important)clazz=clazz+'important ';
  if(props.done)clazz=clazz+'done';

  let onDeleteClick = () =>{
      props.deleteTask(props.taskName);
  }

 let onImportantClick = () =>{
      props.toggleImportant(props.id);
 }

    let onDoneClick = () =>{
        props.toggleDone(props.id);
    }

    return(
        <div>
            <div className={clazz} onClick={onDoneClick}>{props.taskName}</div>
            <button onClick={onDeleteClick}>delete</button>
            <button onClick={onImportantClick}>important</button>
        </div>
    );
}



export default Task;