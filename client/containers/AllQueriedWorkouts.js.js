import React, { Component } from 'react';
// import {Button, InputGroup, FormControl } from 'react-bootstrap'
import ExerciseCard from '../components/ExcerciseCard';
import '/client/styles.css'


 const AllQueriedWorkouts =  (props) => {
    const arraydiv = [];
    let subprop
    for(let i = 0; i< props.queriedExc.length; i++) {
    subprop = props.queriedExc[i]
    arraydiv.push(<ExerciseCard
                   exercise = {subprop.exercise}
                   muscGroup = {subprop.muscGroup}
                   totalReps = {subprop.totalReps}
                   totalSets = {subprop.totalSets}
                   addReps = {props.addReps}
                   addSets = {props.addSets}
                   cardID = {subprop.ID}
                  />)
    }
     return(
       <div>
         <h1>BOX OF QUERIED WORKOUTS</h1>
         {arraydiv}
       </div>
     );
   }
 


export default AllQueriedWorkouts