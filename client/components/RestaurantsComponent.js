// * ************************************
// *
// * @module  RestaurantsContainer
// * @author
// * @date
// * @description stateful component that renders TotalsDisplay and MarketsContainer
// *
// * ************************************
// */

import React, { Component } from 'react';
import {Button, InputGroup, FormControl } from 'react-bootstrap'

 class Restaurants extends Component {
   
   render() {
     return(
        <InputGroup className="mb-3">
        <FormControl
          placeholder= {"Restaurants API"}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Send Request
        </Button>
      </InputGroup>
     );
   }
 
 }

export default Restaurants