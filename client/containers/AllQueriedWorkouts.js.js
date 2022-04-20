import React, { Component } from 'react';
// import {Button, InputGroup, FormControl } from 'react-bootstrap'
import * as actions from '../actions/actions.js';
import { connect } from 'react-redux';

import '/client/styles.css'

const mapStateToProps = state => ({
    // add pertinent state here
    queriedExc: state.dash.queriedExc,
  
  });

  
 class AllQueriedWorkouts extends Component {
  
   render() {
     return(
       <div>
         <h1>BOX OF QUERIED WORKOUTS</h1>
       </div>
     );
   }
 
 }

export default AllQueriedWorkouts