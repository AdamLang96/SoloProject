/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

 import { combineReducers } from 'redux';
 import dashboardReducer from './dashboard_reducer.js';

 // import all reducers here
 
 
 // combine reducers
 const reducers = combineReducers({
   // if we had other reducers, they would go here
   dash: dashboardReducer
 });
 
 // make the combined reducers available for import
 export default reducers;



