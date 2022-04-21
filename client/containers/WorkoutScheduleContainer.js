import React, { Component } from 'react';
import WorkoutCard from '../components/WorkoutCard';
// import {Button, InputGroup, FormControl } from 'react-bootstrap'
import '/client/styles.css'
 const WorkoutSchedule = (props) => {
  
  
  let postVal = {scheduleName : '',
    schedule : props.workoutSched}

    let queryObj = {scheduleName: ''}

  const handleChange = (event) => {
    postVal = {scheduleName: event.target.value,
                schedule : props.workoutSched}
    queryObj = {scheduleName: event.target.value}
    console.log(queryObj)
  };

  
  async function handleClick() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postVal)
    }
        await fetch('http://localhost:8080/createSchedule', requestOptions)
         
  }


    function returnDataClick() {
      props.queryWorkouts(queryObj)
    }

  const arraydiv = [];
    let subprop
    for(let i = 0; i< props.workoutSched.length; i++) {
    subprop = props.workoutSched[i]
    arraydiv.push(<WorkoutCard
                   exercise = {subprop.exercise}
                   muscGroup = {subprop.muscGroup}
                   cardID = {subprop.ID}
                   totalReps = {subprop.totalReps}
                   totalSets = {subprop.totalSets}
                   addReps = {props.addReps}
                   addSets = {props.addSets}
                  ></WorkoutCard>
                )
    }
     return(
       <div>
         <div className = "marketBox">
         <h1>Workout Schedule</h1>
         <input type= "text" id = "inputBox" onChange = {handleChange}/> 
         <button onClick = {handleClick}>Save Workout</button>
         <button onClick = {returnDataClick}>Find Workout</button>

         </div>
         <div className = "containerSchedule">
         {arraydiv}
         </div>

         </div>
     );
   }
 

export default WorkoutSchedule