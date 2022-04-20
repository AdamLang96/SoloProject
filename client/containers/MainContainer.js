/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import Workout from '/client/components/WorkoutScheduleComponent.js'
 import Update from '/client/components/UpdateComponent.js'
 import Query from '/client/components/QueryComponent.js'
 import QueriedAll from '/client/containers/AllQueriedWorkouts.js'
 import '/client/styles.css'


 
  class MainContainer extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
          <div>
          <div>
              <h1>ADD WORKOUTS</h1>
       <Update></Update>
      </div>
      <div>
          <h1>FIND EXERCISES</h1>
       <Query></Query>
       </div>
       <div>
           <Workout></Workout>
       </div>
       <div>
           <QueriedAll></QueriedAll>
       </div>
       </div>
      );
    }
  
  }

export default MainContainer