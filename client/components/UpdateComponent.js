// * ************************************
// *
// * @module  MapsContainer
// * @author
// * @date
// * @description stateful component that renders TotalsDisplay and MarketsContainer
// *
// * ************************************
// */

import React, { Component } from 'react';
import {Button, InputGroup,  FloatingLabel, Form, Container, Row, Col } from 'react-bootstrap'

 class Update extends Component {
   render() {
    let textValue = {}
     
    
    
    const handleChangeMusc = (event) => {
        textValue['muscGroup'] = event.target.value
      }; 

      const handleChangeDiff = (event) => {
        textValue['level'] = event.target.value

    }; 

    const handleChangeSplit= (event) => {
        textValue['u_l_c'] = event.target.value

    }; 

    const handleChangePush = (event) => {
        textValue['push_pull'] = event.target.value

    }; 

    const handleChangeEquip = (event) => {
        textValue['modality'] = event.target.value

    }; 

    const handleChangeJoint= (event) => {
      textValue["joint"] = event.target.value
    }; 

    const handleChangeExerName= (event) => {
      textValue["exercise"] = event.target.value
    }; 


      async function handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(textValue)
        }
            await fetch('http://localhost:8080/', requestOptions)
             
      }
    
      
     return(
        <div>
        <Form.Control type="input" placeholder="Exercise Name" onChange = {handleChangeExerName}/>
        <FloatingLabel controlId="floatingSelect">
        <Form.Label>Muscle Group                  </Form.Label>
        <Form.Select aria-label="Muscle Group" onChange = {handleChangeMusc}>
          <option value="Abdominals - Lower">Abdominals - Lower</option>
          <option value="Abdominals - Obliques">Abdominals - Obliques</option>
          <option value="Abdominals - Total">Abdominals - Total</option>
          <option value="Back - Latissimus Dorsi<">Back - Latissimus Dorsi</option>
          <option value="Back - Lat.Dorsi/Rhomboids">Back - Lat.Dorsi/Rhomboids</option>
          <option value="Biceps">Biceps</option>
          <option value="Calves - Gastrocnemius">Calves - Gastrocnemius</option>
          <option value="Calves - Soleus">Calves - Soleus</option>
          <option value="Legs - Hamstrings">Legs - Hamstrings</option>
          <option value="Legs - Quadriceps">Legs - Quadriceps</option>
          <option value="Lower Back - Erector Spinae">Lower Back - Erector Spinae</option>
          <option value="Shoulders - Delts/Traps">Shoulders - Delts/Traps</option>
          <option value="Shoulders - Rotator Cuff">Shoulders - Rotator Cuff</option>
          <option value="Triceps">Triceps</option>


        </Form.Select>
      </FloatingLabel>

    <FloatingLabel controlId="floatingSelect">
    <Form.Label>Difficulty  </Form.Label>
 <Form.Select aria-label="Level" onChange = {handleChangeDiff}>
  <option value="Beginner">Beginner</option>
  <option value="Intermediate">Intermediate</option>
  <option value="Advanced">Advanced</option>
 </Form.Select>
 </FloatingLabel>

 <FloatingLabel controlId="floatingSelect">
 <Form.Label>Split  </Form.Label>
 <Form.Select aria-label="u_l_c" onChange = {handleChangeSplit}>
  <option value="Core">Core</option>
  <option value="Upper">Upper</option>
  <option value="Lower">Lower</option>
 </Form.Select>
 </FloatingLabel>
 
 <FloatingLabel controlId="floatingSelect">
 <Form.Label>Push/Pull  </Form.Label>
 <Form.Select aria-label="u_l_c" onChange = {handleChangePush}>
  <option value="Push">Push</option>
  <option value="Pull">Pull</option>
  <option value="Static">Static</option>
 </Form.Select>
 </FloatingLabel>

 <FloatingLabel controlId="floatingSelect">
 <Form.Label>Equipment  </Form.Label>
 <Form.Select aria-label="u_l_c" onChange = {handleChangeEquip}>
  <option value="FW">Free Weights</option>
  <option value="C">Cables</option>
  <option value="M">Machine</option>
 </Form.Select>
 </FloatingLabel>

 <FloatingLabel controlId="floatingSelect">
 <Form.Label>Joint  </Form.Label>

 <Form.Select aria-label="u_l_c" onChange = {handleChangeJoint}>
  <option value="M">Multi-Joint Exercise</option>
  <option value="S">Single-Joint Exercise</option>
 </Form.Select>
 </FloatingLabel>

 <Button variant="primary" onClick = {handleClick}>Submit</Button>
 </div>

     );
   }
 
 }

export default Update