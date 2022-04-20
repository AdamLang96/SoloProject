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
import {Button, InputGroup, FormControl } from 'react-bootstrap'

 class Maps extends Component {
   render() {
    let textValue;
    
    
    const handleChange = (event) => {
        textValue = event.target.value
      }; 

      async function handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ muscGroup: 'React POST Request Example', exercise: 'test3' })
        }
            await fetch('http://localhost:8080/', requestOptions)
      }


     return(
        <InputGroup className="mb-3">
        <FormControl
          placeholder= {"Maps API"}
          onChange = {handleChange}
        />
        <Button 
        variant="outline-secondary" 
        id="button-addon2"
        onClick = {handleClick}
        >
          Send Request
        </Button>
      </InputGroup>
     );
   }
 
 }

export default Maps