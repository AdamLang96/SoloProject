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
    workoutSchedule: state.dash.workoutSchedule,
    queriedExc: state.dash.queriedExc
  });

  const mapDispatchToProps = dispatch => ({
    addWorkout: (ID)       => dispatch(actions.addWorkoutActionCreator(ID)),
    queryData: (params)         =>  dispatch(actions.runQueryActionCreator(params)),
    addReps: (ID)               => dispatch(actions.addRepsActionCreator(ID)),
    addSets: (ID)               => dispatch(actions.addSetsActionCreator(ID))
  });



  class MainContainer extends Component {
    constructor(props) {
      super(props);
        }
    
    render() {
      return(
          <div>
          <div>
       <Update></Update>
      </div>
      <div>
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
            queriedExc = {this.props.queriedExc}
            addReps = {this.props.addReps}
            addSets = {this.props.addSets}
           ></QueriedAll>
       </div>
       </div>
      );
    }
  
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
