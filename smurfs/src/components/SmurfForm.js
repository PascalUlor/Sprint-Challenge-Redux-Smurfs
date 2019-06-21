import React, { createRef } from 'react';
import { connect } from 'react-redux';
// import Loader from "react-loader-spinner";
import { addData } from '../actions';


export const SmurfForm =(props)=>{
console.log('-------', props)
const { addData } = props;
  const name = createRef()
  const age = createRef()
  const height = createRef()

  const onAddSmurf = (e) => {
      e.preventDefault()
    addData({
      name: name.current.value,
      age: age.current.value,
      height: height.current.value,
    });
    name.current.value = '';
    age.current.value = '';
    height.current.value = '';
  }

return(
    <form onSubmit={()=> onAddSmurf}>
    <div>Name</div>
        <input 
        ref={name} 
        type="text"
        />
        <div>age</div>
        <input 
        ref={age} 
        type="text" />
        <div>Height</div>
        <input 
        ref={height} 
        type="height" />

<button onClick={onAddSmurf}>Add Smurf</button>
    </form>
)
}



const mapStateToProps =(state)=>{
    return {
        smurflist: state.smurfs,
        fetching: state.fetching
    };
  }
  
  export default connect(
    mapStateToProps, {addData}
  )(SmurfForm);
  