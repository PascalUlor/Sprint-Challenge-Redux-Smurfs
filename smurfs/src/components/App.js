import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { fetchSmurf } from '../actions';
import Smurf from './Smurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = (props)=> {
  const { fetchSmurf, fetching, smurflist } = props;
  useEffect(()=>{
    fetchSmurf()
  },[]);
    console.log('++++++',props.smurflist)

    if (fetching) {
      return (<div>
  <Loader type="Circles" color="green" height="100" width="100" />
      </div>);
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {smurflist.map(smurf=>{
    return (
      <Smurf smurf={smurf}/>
      )
  })}
      </div>
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

