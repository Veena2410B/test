import React, { Component } from "react";
import Component1 from '../Component1';
import Component2 from '../Component2';
import Component3 from '../Component3';

import {Transition, animate} from "react-spring"



class Test extends Component {

  


  render() {
    

    return (
      <div className='App'> 
   
        <h1>Test Welcome</h1>

        <Component1 /> 
        <Component2/> 
        <Component3 /> 


      </div>
    );
  }
}
 
export default Test;