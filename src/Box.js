import React, { Component } from 'react';
import AllBoxes from './AllBoxes'
import './App.css'
import PropTypes from 'prop-types'

class Box extends Component {
  render() {  
    console.log(this.props.boxes)
    return this.props.boxes.map((box)=>
      <AllBoxes key={box.number} boxes={box}
      delBoxes={this.props.delBoxes}/>
    ) 
}}

Box.protoTypes = {
  boxes: PropTypes.object.isRequired
}

export default Box;
