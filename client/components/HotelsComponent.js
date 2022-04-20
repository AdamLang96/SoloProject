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
import {Button, InputGroup, FormControl } from 'react-bootstrap'
import '/client/styles.css'
 class Hotels extends Component {
  
   render() {
     return(
        <InputGroup className="mb-3">
    <FormControl
      placeholder= {"Hotel API"}
    />
    <Button variant="outline-secondary" id="button-addon2">
      Send Request
    </Button>
  </InputGroup>
     );
   }
 
 }

export default Hotels