import React from "react";
import {connect} from "react-redux";
import './Filter.css'
import {changeFilterAC, toggleDoneAC} from "../../Redux/mainReducer";

let Filter = (props) =>{

    let buttonAllClazz = '';
    let buttonActiveClazz = '';
    let buttonDoneClazz = '';

    if(props.filter==='all'){
        buttonAllClazz='activeButton'
    }
    else if(props.filter==='active'){
        buttonActiveClazz='activeButton'
    }
    else if(props.filter==='done'){
        buttonDoneClazz='activeButton'
    }


    return(
        <div>
            <button className={buttonAllClazz} onClick={()=>{
                props.changeFilter('all');
            }}>All</button>
            <button className={buttonActiveClazz} onClick={()=>{
                props.changeFilter('active');
            }}>Active</button>
            <button className={buttonDoneClazz} onClick={()=>{
                props.changeFilter('done');
            }}>Done</button>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        filter:state.mainPage.filter,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeFilter:(filter)=>{
            dispatch(changeFilterAC(filter))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

