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
 import WorkoutSchedule from '/client/containers/WorkoutScheduleContainer.js'
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
    addWorkout: (ID)            => dispatch(actions.addWorkoutActionCreator(ID)),
    queryData: (params)         =>  dispatch(actions.runQueryActionCreator(params)),
    addReps: (ID)               => dispatch(actions.addRepsActionCreator(ID)),
    addSets: (ID)               => dispatch(actions.addSetsActionCreator(ID)),
    queryWorkouts: (params)     => dispatch(actions.queryWorkoutsActionDispatch(params))
  });



  class MainContainer extends Component {
    constructor(props) {
      super(props);
        }
    
    render() {
      return(
        <div>
    <h1 className = "alignAll">Workout Planner</h1>
        <div className =  "alignAll">
          <div className = "container">
          <div>
       <Update></Update>
      </div>
      <div>
       <Query
       queryData = {this.props.queryData}
       ></Query>
       </div>
       <div>

           <WorkoutSchedule
            workoutSched = {this.props.workoutSchedule}
            addReps = {this.props.addReps}
            addSets = {this.props.addSets}
            queryWorkouts = {this.props.queryWorkouts}
           ></WorkoutSchedule>

       </div>
       <div>
           <QueriedAll
            addWorkout = {this.props.addWorkout}
            queriedExc = {this.props.queriedExc}
           ></QueriedAll>
       </div>
       </div>
       </div>
       </div>
      );
    }
  
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
