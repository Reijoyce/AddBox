/*************************/
import React, { Component } from 'react';
import Box from './Box'
import './App.css'
import AllBoxes from './AllBoxes';

class App extends Component {

  render() {    
    return (
      <div>
      <Box />
     
      </div>
    );
  }
}

export default App;
/***************************************************
import React, { Component } from 'react';
import AllBoxes from './AllBoxes'
import './App.css'

class Box extends Component {
  state = {
    boxes: [
      {
        number: Math.random()
      },
      {
        number2: Math.random()
      }
    ]
  }

  addBox = () => {
    this.setState((currentState) => ({
      boxes: [currentState.boxes, currentState.boxes, {number: Math.random()}]
    }))
  }

  removeBox = (remove) => {
    this.setState((removeBox) => ({
      boxes: removeBox.boxes.filter((box) => {
        return box.remove !== remove;
      })
    }))
  }

  render() { 
    console.log(this.state.boxes)  

    return (
      <div className='boxes'>
      <button onClick= {this.addBox}>New Box</button>
      {this.state.boxes.map((boxes)=>(
      <h3 className='numbers'key={boxes.number}>{boxes.number}</h3> ))}
      
      </div>
    )  
  
}}

export default Box;
/************************************************
import React, { Component } from 'react';
import AllBoxes from './AllBoxes'
import './App.css'

class Box extends Component {
  state = {
    boxes: [
      {
        number: Math.random()
      },
      {
        number2: Math.random()
      }
    ]
  }

  addBox = () => {
    this.setState((currentState) => ({
      boxes: [currentState.boxes, currentState.boxes, {number: Math.random()}]
    }))
  }

  removeBox = (remove) => {
    this.setState((removeBox) => ({
      boxes: removeBox.boxes.filter((box) => {
        return box.remove !== remove;
      })
    }))
  }

  render() { 
    console.log(this.state.boxes)  

    return (
      <div className='boxes'>
      <button onClick= {this.addBox}>New Box</button>
      {this.state.boxes.map((boxes)=>(
      <h3 className='numbers'key={boxes.number}>{boxes.number}</h3> ))}
      
      </div>
    )  
  
}}

export default Box;
