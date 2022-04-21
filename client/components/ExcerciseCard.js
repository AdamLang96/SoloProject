import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import {Button, InputGroup, FormControl } from 'react-bootstrap'
import '/client/styles.css'
 const ExerciseCard = (props) => {
     const handleClick = () => {
         props.addWorkout(props.cardID)
     }
     return(
       <div className = "marketBoxQueried">
          <div>
              <b>
              Exercise:
              </b> 
              <text> 
               {props.exercise}
              </text>
            </div>
       
            <div>
              <b>
              Muscle Group:
              </b> 
              <text> 
               {props.muscGroup}
              </text>
              <div>
                  <button onClick = {handleClick}>Add to Workout Schedule</button>
              </div>
            </div>
        </div>


     );
   }
 

export default ExerciseCard