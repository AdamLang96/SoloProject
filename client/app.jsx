/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import Container from '/client/containers/MainContainer.js'

 class App extends Component {
   constructor(props) {
     super(props);
     
   }
 
   render() {
     return(
       <div>
         <Container>
         </Container>
       </div>
     );
   }
 }
 
 export default App;
 