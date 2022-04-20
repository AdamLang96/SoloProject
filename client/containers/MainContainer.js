/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import Hotels from '/client/components/HotelsComponent.js'
 import Maps from '/client/components/MapComponent.js'
 import Restaurants from '/client/components/RestaurantsComponent.js'

 import '/client/styles.css'
  class MainContainer extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
          <div>
       <Maps></Maps>
       </div>
      );
    }
  
  }

export default MainContainer