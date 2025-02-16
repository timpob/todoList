import React from "react";
import {connect} from "react-redux";
import Task from "../Task/Task";
import {addTaskAC, deleteTaskAC, toggleDoneAC, toggleImportant, toggleImportantAC} from "../../Redux/mainReducer";
import filter from "../Filters/Filter";


let TaskSet = (props) => {

    let tasksAfterFilter = [];
    let tasksAfterSearch = [];


    if (props.filter === 'all') tasksAfterFilter = props.tasks;
    else if (props.filter === 'active') tasksAfterFilter = props.tasks.filter((el) => el.done !== true)
    else tasksAfterFilter = props.tasks.filter((el) => el.done === true)

    if (props.search === '') tasksAfterSearch = tasksAfterFilter;
    else tasksAfterSearch = tasksAfterFilter.filter((el) => el.taskName.includes(props.search));


    let masTasks = tasksAfterSearch.map((item) => <Task
        taskName={item.taskName} key={item.id}
        done={item.done} important={item.important}
        deleteTask={props.deleteTask}
        toggleImportant={props.toggleImportant}
        toggleDone={props.toggleDone}
        id={item.id}></Task>);

    return (
        <div>
            {masTasks}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.mainPage.tasksArr,
        filter: state.mainPage.filter,
        search: state.mainPage.search,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (taskName) => {
            dispatch(deleteTaskAC(taskName))
        },
        toggleImportant: (id) => {
            dispatch(toggleImportantAC(id))
        },
        toggleDone: (id) => {
            dispatch(toggleDoneAC(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSet);