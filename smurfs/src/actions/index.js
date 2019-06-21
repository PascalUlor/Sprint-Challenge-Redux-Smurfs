import axios from 'axios';


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const SUCCESS = 'SUCCESS';
export const FETCHING = 'FETCHING';
export const FAILURE = 'FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATE_SMURF = 'UPDATE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const baseUrl = "http://localhost:3333";

export const fetching = status => {
    return {
        type: FETCHING,
        payload: status
    }
}

export const success = data => {
    return {
        type: SUCCESS,
        payload: data
    }
}

export const failure = mssg =>{
    return {
        type: FAILURE,
        payload: mssg
    }
}

export const deleteSmurf = id => {
    return {
        type: DELETE_SMURF,
        payload: id
    }
}

export const updateSMURF = id => {
    return {
        type: UPDATE_SMURF,
    payload: id
}
}


export const addSmurf = (name, height, age) => {
    return {
        type: ADD_SMURF,
        payload: {
            name,
            age,
            height 
        }
    }
}


export const fetchSmurf = () => dispatch => {
    dispatch(fetching(true));
    axios
      .get(`${baseUrl}/smurfs`)
      .then(res => {
        console.log(res)
        dispatch(success(res.data));
        dispatch(fetching(false));
      })
      .catch(err => {
        dispatch(failure(err.message));
        dispatch(fetching(false));
      });
  };

  export const addData = ({name,age,height} ) => dispatch => {
    axios.post(`${baseUrl}/smurfs`, {name,age, height})
    .then(res=>{
        console.log('+++++++',res);
        dispatch(addSmurf(res.data))
        dispatch(fetchSmurf())
    }).catch(err =>{
        dispatch(failure(err.message));
      })
  }
