import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import styled from 'styled-components';
import { fetchSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import Nav from './Nav';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const MainContainer = styled.div`
background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
  url(https://wallpapersite.com/images/pages/pic_h/2350.jpg) center/cover
    no-repeat border-box,
  skyblue;
width: 100vw;
min-height: 100vh;
position: relative;
text-align: center;
`;


const App = (props)=> {
  const { fetchSmurf, fetching, smurflist } = props;
  useEffect(()=>{
    fetchSmurf()
  },[]);

    if (fetching) {
      return (<div>
  <Loader type="Circles" color="green" height="100" width="100" />
      </div>);
    }
    return (
      <MainContainer>
        <Nav />
        <div>Have fun!</div>
        {smurflist.map(smurf=>{
    return (
      <Smurf smurf={smurf} key={smurf.id}/>
      )
  })}
  <SmurfForm />
      </MainContainer>
    );
}

// export default App;

const mapStateToProps =(state) =>{
  return {
    smurflist: state.smurfs,
    fetching: state.fetching
  }
}

export default connect(
  mapStateToProps, {fetchSmurf}
)(App);

