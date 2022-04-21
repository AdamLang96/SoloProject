/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes.js';


export const runQueryActionCreator = params => {
  console.log("myparametersforsearch", params)
  return dispatch => {
    async function fetchWorkouts(params) {
                const  response =  await fetch('http://localhost:8080/findUsers', 
                  {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(params)
                  }
                  )
                const  data     =  await response.json()
                dispatch(queryDataActionCreator(data))
            }
      fetchWorkouts(params)
  }   
}

export const queryDataActionCreator = queryResults => ({
  type: types.QUERYDATA, 
  payload: queryResults
});

export const addWorkoutActionCreator = workout => ({
  type: types.ADDTOWORKOUTLIST,
  payload: workout
});



