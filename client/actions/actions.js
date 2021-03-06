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


export const queryWorkoutsActionDispatch = params => {
  return dispatch => {
    async function fetchWorkouts(params) {
                const  response =  await fetch('http://localhost:8080/findSchedule', 
                  {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(params)
                  }
                  )
                const  data  =  await response.json()
                console.log(data)
                dispatch(queryWorkoutsActionCreator(data))
            }
      fetchWorkouts(params)
  }   
}





export const queryDataActionCreator = queryResults => ({
  type: types.QUERYDATA, 
  payload: queryResults
});

export const queryWorkoutsActionCreator = queryResults => ({
  type: types.QUERYWORKOUTS, 
  payload: queryResults
});

export const addWorkoutActionCreator = workout => ({
  type: types.ADDTOWORKOUTLIST,
  payload: workout
});

export const addRepsActionCreator = ID => ({
  type: types.ADDREPS,
  payload: ID
});

export const addSetsActionCreator = ID => ({
  type: types.ADDSETS,
  payload: ID
});




