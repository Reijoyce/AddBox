import React, { Component } from 'react';
import Box from './Box'
import './App.css'
import Header from './Header'
import AddBox from './AddBox';

class App extends Component {
  state = {
    boxes: [
      { 
        id:1,
        number: Math.random()
      },
      {
        id:2,
        number: Math.random()
      }
    ]
  }
//delete boxes



  delBoxes= () =>{
    
   this.setState({ boxes: [...this.state.boxes.filter(box => box.id !== box.id)]})
  }
  // delete(id){
  //   const delbox = this.state.boxes.filter(i => i.id !== id.id)
  //   this.setState({delbox})
  // }
  //addBox
  addBox=() =>{
    const newBox = {
      id: 3,
      number: Math.random()
    }

    this.setState({ boxes : [...this.state.boxes, newBox]})
  }

  render() {   
    return (
     
      <div className='App'>
        <Header />
        <AddBox addBox={this.addBox} />
        <Box boxes={this.state.boxes} 
        delBoxes={this.delBoxes}/>      
      </div>
    );
  }
}

export default App;
