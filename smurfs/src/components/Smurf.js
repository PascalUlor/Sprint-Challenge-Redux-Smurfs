import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background-color: rgba(103, 128, 159, 1);
opacity: 0.5;
width: 30%;
margin: 1rem auto;
padding: .5rem;
`;


const Smurf = ({ smurf }) => {
    console.log('======',smurf)
  return (
    <div className="Smurf">
    <Card>
    <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      
    </Card>  
    </div>
  );
};

export default Smurf;

