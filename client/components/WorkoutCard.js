// * ************************************
// *
// * @module  HotelsContainer
// * @author
// * @date
// * @description stateful component that renders TotalsDisplay and MarketsContainer
// *
// * ************************************
// */

import React, { Component } from 'react';
// import {Button, InputGroup, FormControl } from 'react-bootstrap'
import '/client/styles.css'
 
const WorkoutCard = (props) => {
   const handleClickAddReps = () => {
     props.addReps(props.cardID)
   }

   const handleClickAddSets = () => {
    props.addSets(props.cardID)
  }
     return(
      <div className = "marketBox">
          
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
              </div>
              
              <div>
              <b>
              Total Reps:
              </b> 
              <text> 
               {props.totalReps}
              </text>
              </div>

              
              <b>
              Total Sets:
              </b> 
              <text> 
               {props.totalSets}
              </text>



              <div>
                  <button onClick = {handleClickAddReps}>Add Reps</button>
              </div>
              
              <div>
                  <button onClick = {handleClickAddSets}>Add Sets</button>
              </div>


            </div>

     );
   }
 

export default WorkoutCard