import React from "react";
import {connect} from "react-redux";
import {changeSearchAC} from "../../Redux/mainReducer";

let Search = (props) =>{

    let onInputChange = (event) =>{
        props.changeSearch(event.target.value);
    }
    return(
        <div>
            <input placeholder='search' value={props.search} onChange={onInputChange}/>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
      search:state.mainPage.search,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeSearch:(txt)=>{
            dispatch(changeSearchAC(txt))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

