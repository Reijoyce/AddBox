import React, { Component } from 'react'


export class AddBox extends Component {
  state={
    numbers: ' '
  }
  onClick= (e) =>{
    e.preventDefault();
    this.props.addBox(this.state.numbers);
    this.setState({numbers: ' '})
    
  }
  
  render() {
    return (
      <div>
        <button onClick={this.onClick}>Add new Box</button>
      </div>
    )
  }
}

export default AddBox


