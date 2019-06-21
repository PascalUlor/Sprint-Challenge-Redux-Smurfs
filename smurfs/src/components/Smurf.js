import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteData } from '../actions';

const Card = styled.div`
background-color: rgba(103, 128, 159, 1);
opacity: 0.5;
width: 30%;
margin: 1rem auto;
padding: .5rem;
`;


const Span = styled.div`
display: flex;
justify-content: flex-end;
margin: .5rem auto;
span {
  font-weight: bold;
  color: red;
  margin: 0 auto;
  }
`;


export const Smurf = ({ smurf }) => {
    console.log('======',smurf)
  return (
    <div className="Smurf">
    <Card>
    <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <Span>
        <span>
        
        <button>Edit</button>
        
        </span>
        <span><button onClick={deleteData(smurf.id)}>Delete</button></span>
        </Span>
    </Card>  
    </div>
  );
};

// export default Smurf;


const mapStateToProps =(state)=>{
    return {
        smurflist: state.smurfs,
        fetching: state.fetching
    };
  }
  
  export default connect(
    mapStateToProps, {deleteData}
  )(Smurf);
  
