import filter from "../Components/Filters/Filter";

const DELETE_TASK = 'DELETE_TASK';
const ADD_TASK = 'ADD_TASK';
const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';
const TOGGLE_DONE = 'TOGGLE_DONE';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_SEARCH = 'CHANGE_SEARCH';


let initialState = {
    tasksArr: [{taskName: 'drink', important: true, done: false, id: 0},
        {taskName: 'eat', important: true, done: false, id: 1},
        {taskName: 'gym', important: true, done: false, id: 2},
        {taskName: 'lay', important: false, done: false, id: 3},
        {taskName: 'sit', important: true, done: false, id: 4}],
    lastId: 4,
    filter: 'all',//active,done
    search: '',

};
let mainReducer = (state = initialState, action) => {

    let newState = {};


    if (action.type === DELETE_TASK) {
        newState = {
            ...state,
            tasksArr: state.tasksArr.filter((el) => action.taskName !== el.taskName)
        }
        return newState;
    } else if (action.type === ADD_TASK) {

        if (action.taskName !== '') {
            let newId = state.lastId + 1;
            console.log(newId);

            let newTask = {
                taskName: action.taskName,
                important: false,
                done: false,
                id: newId,
            };
            newState = {
                ...state,
                tasksArr: [...state.tasksArr, newTask],
                lastId: newId,
            }
            return newState;
        }
    } else if (action.type === TOGGLE_IMPORTANT) {

        let idx = state.tasksArr.findIndex((el) => el.id === action.id);
        let taskToToggle = state.tasksArr[idx];

        // let taskToToggle = state.tasksArr.filter((el)=>el.id===action.id)[0];

        let toggledTask = {
            ...taskToToggle,
            important: taskToToggle.important ? false : true
        }

        let firstPart = state.tasksArr.slice(0, idx);
        let secondPart = state.tasksArr.slice(idx + 1);

        let newArr = [...firstPart, toggledTask, ...secondPart];

        newState = {
            ...state,
            tasksArr: newArr,
        }
        return newState;

    } else if (action.type === TOGGLE_DONE) {

        let idx = state.tasksArr.findIndex((el) => el.id === action.id);
        let taskToToggle = state.tasksArr[idx];

        // let taskToToggle = state.tasksArr.filter((el)=>el.id===action.id)[0];

        let toggledTask = {
            ...taskToToggle,
            done: taskToToggle.done ? false : true
        }

        let firstPart = state.tasksArr.slice(0, idx);
        let secondPart = state.tasksArr.slice(idx + 1);

        let newArr = [...firstPart, toggledTask, ...secondPart];

        newState = {
            ...state,
            tasksArr: newArr,
        }
        return newState;

    } else if (action.type === CHANGE_FILTER) {
        newState = {
            ...state,
            filter: action.filter,
        }
        return newState;
    } else if (action.type === CHANGE_SEARCH) {
        newState = {
            ...state,
            search: action.txt,
        }
        return newState;
    } else return state;

}


export const deleteTaskAC = (taskName) => {
    return {type: DELETE_TASK, taskName: taskName}
}

export const addTaskAC = (taskName) => {
    return {type: ADD_TASK, taskName: taskName}
}

export const toggleImportantAC = (id) => {
    return {type: TOGGLE_IMPORTANT, id: id}
}

export const toggleDoneAC = (id) => {
    return {type: TOGGLE_DONE, id: id}
}

export const changeFilterAC = (filter) => {
    return {type: CHANGE_FILTER, filter: filter}
}

export const changeSearchAC = (txt) => {
    return {type: CHANGE_SEARCH, txt: txt}
}
export default mainReducer;



