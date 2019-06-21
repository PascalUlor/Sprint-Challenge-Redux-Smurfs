import React from "react";
import { connect } from "react-redux";
import { Smurf } from "./Smurf";
import { deleteData } from "../actions";
// import { fetchSmurf } from '../actions';

const SmurfContainer = (props)=>{
    const { smurflist, deleteData } = props;
    console.log('+++++++++', props);
    return (
        <div>
              {smurflist.map(smurf=>{
    return (
      <Smurf smurf={smurf} deleteData={deleteData} key={smurf.id}/>
      )
  })}
        </div>
    )
}

// export default SmurfContainer;

const mapStateToProps = state => {
    return {
      smurflist: state.smurfs,
      fetching: state.fetching
    };
  };
  
  export default connect(
    mapStateToProps,
    { deleteData }
  )(SmurfContainer);
  
