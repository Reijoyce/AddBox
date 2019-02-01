import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AllBoxes extends Component {
  render() {
     const {id, number} = this.props.boxes;
      return (    
      <div style={{backgroundColor: '#f4f4f4', width : '30%', height : '30px', border: 'solid'}}>
        <div>   
          <button onClick={this.props.delBoxes.bind(this, id)} style={btnStyle}>x</button>
            {number}  
        </div>        
      </div>      
    )
  }
}
//PropTypes
AllBoxes.protoTypes = {
    boxes: PropTypes.object.isRequired
  }
//Styles
const btnStyle = {
    backgroundColor: '#f4f4f4',
    color: 'ffff',
    border : 'none',
    padding: '2px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}




export default AllBoxes
