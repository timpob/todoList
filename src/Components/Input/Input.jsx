import React, {useState} from "react";
import {connect} from "react-redux";
import {addTaskAC} from "../../Redux/mainReducer";

let Input = (props) =>{

    let [newTask,changeNewTask] = useState('');

    let onInputChange = (event) =>{
        changeNewTask(event.target.value);
    }

    let onAddClick = () =>{
       props.addTask(newTask);
       changeNewTask('');
    }


    return(
        <div>
         <input placeholder='type new task here' onChange={onInputChange} value={newTask}/>
            <button onClick={onAddClick}>Add</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask:(taskName)=>{
            dispatch(addTaskAC(taskName))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);