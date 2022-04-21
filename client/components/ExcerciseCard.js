import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import {Button, InputGroup, FormControl } from 'react-bootstrap'
import '/client/styles.css'
 const ExerciseCard = (props) => {
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
              <div>
              </div>
            </div>
        </div>


     );
   }
 

export default ExerciseCard