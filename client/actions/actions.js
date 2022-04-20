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


export const queryDataActionCreator = () => ({
  type: types.QUERYDATA
});

export const addWorkoutActionCreator = workout => ({
  type: types.ADDTOWORKOUTLIST,
  payload: workout
});



