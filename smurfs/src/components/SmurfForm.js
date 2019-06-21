import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
// import Loader from "react-loader-spinner";
import { addData, updateSmurf } from '../actions';


// export const SmurfForm =(props)=>{
// const { addData } = props;
//   const name = createRef()
//   const age = createRef()
//   const height = createRef()

//   const onAddSmurf = (e) => {
//       e.preventDefault()
//     addData({
//       name: name.current.value,
//       age: age.current.value,
//       height: height.current.value,
//     });
//     name.current.value = '';
//     age.current.value = '';
//     height.current.value = '';
//   }

// return(
//     <div>
//     <h1>Smurf List</h1>
// <form onSubmit={()=> onAddSmurf}>
//     <div>Name</div>
//         <input 
//         ref={name} 
//         type="text"
//         />
//         <div>age</div>
//         <input 
//         ref={age} 
//         type="text" />
//         <div>Height</div>
//         <input 
//         ref={height} 
//         type="height" />

// <div>
// <button onClick={(e)=>{
//     onAddSmurf(e)
//     props.history.push('/')}}>Add Smurf</button>
// </div>
//     </form>
//     </div>
    
// )
// }


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50rem;
  /* background-color: #fafafa; */
  margin: 0 auto;
  margin-top: 0;
`;

const FormStyle = styled.form`
  width: 50%;
  margin: 5rem auto;
  border: 2px solid lightgrey;
  padding: 4rem;
`;

const FormInput = styled.input`
  color: #000;
  font-weight: 100;
  width: 90%;
  display: block;
  padding: 0.5rem;
  background-color: rgba(242, 241, 239, 1);
  border: 2px solid rgba(242, 241, 239, 1);
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background-position: -800px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  margin: auto;
  margin-bottom: 1em;
  &:focus {
    outline: none;
    border: 1px solid rgba(189, 195, 199, 1);
  }
`;


const SmurfForm = props => {
    console.log("======", props);
  const { addData, smurflist, updateSmurf} = props
  const id = Number(props.match.params.id);
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });
  console.log('&&&&&&&&&',smurflist)

  const addSmurf = e => {
      e.preventDefault();
    let newSmurf = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    };
    // add code to create the smurf using the api
    addData(newSmurf);
    props.history.push('/');
  };

  
  const updateHandler = () => {
    const selectedSmurf = smurflist.find(smurf=> smurf.id === id)
    let smurfDeets = {
      id: selectedSmurf.id,
      name: smurf.name !== ''? smurf.name: selectedSmurf.name,
      age: smurf.age !== ''? smurf.age: selectedSmurf.age,
      height: smurf.height !== '' ? smurf.height: selectedSmurf.height
    };
    console.log('++++++++++',smurfDeets);
    updateSmurf(smurfDeets);
    props.history.push('/');
  };

  const handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setSmurf(smurf => ({ ...smurf, [name]: value }));
  };

  const method = !id? addSmurf : updateHandler;
  const text = !id? 'Add Smurf': 'Update Smurf';
  const submit = !id? 'Add to the village': 'Update Smurf';
  return (
    <Container>
        <FormStyle onSubmit={method}>
          <h1>{text}</h1>
          <FormInput
            onChange={handleInputChange}
            placeholder="name"
            value={smurf.name}
            name="name"
          />
          <FormInput
            onChange={handleInputChange}
            placeholder="age"
            value={smurf.age}
            name="age"
          />
          <FormInput
            onChange={handleInputChange}
            placeholder="height"
            value={smurf.height}
            name="height"
          />
          <button type="submit">{submit}</button>
        </FormStyle>
    </Container>
  );
};



const mapStateToProps =(state)=>{
    return {
        smurflist: state.smurfs,
        fetching: state.fetching
    };
  }
  
  export default connect(
    mapStateToProps, {addData,updateSmurf}
  )(SmurfForm);
  