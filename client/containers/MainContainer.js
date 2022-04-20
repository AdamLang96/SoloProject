/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders 
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import Workout from '/client/components/WorkoutScheduleComponent.js'
 import Update from '/client/components/UpdateComponent.js'
 import Query from '/client/components/QueryComponent.js'
 import QueriedAll from '/client/containers/AllQueriedWorkouts.js'
 import * as actions from '../actions/actions.js';
 import '/client/styles.css'
 import { connect } from 'react-redux';


 const mapStateToProps = state => ({
    // add pertinent state here
    workoutSchedule: state.dash.workoutSchedule,
    queriedExc: state.dash.queriedExc
     
  });

  const mapDispatchToProps = dispatch => ({
    addWorkout: (workout) => dispatch(actions.addWorkoutActionCreator(workout)),
    queryData: () =>  dispatch(actions.queryDataActionCreator())
  });

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
       <Query
       queryData = {this.props.queryData}
       ></Query>
       </div>
       <div>
           <Workout
           workoutSched = {this.props.workoutSchedule}
           ></Workout>
       </div>
       <div>
           <QueriedAll
            addWorkout = {this.props.addWorkout}
           ></QueriedAll>
       </div>
       </div>
      );
    }
  
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
