import React from "react";
import {connect} from "react-redux";



let Statistics = (props) =>{

    let dones = props.tasksArr.filter((el)=>el.done===true).length;


    return(
        <div>
            <div>{props.tasksArr.length-dones} more to do, {dones} done</div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
       tasksArr:state.mainPage.tasksArr,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);

