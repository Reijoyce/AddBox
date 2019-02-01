import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h2>Add and Delete boxes</h2>
      </div>
    )
  }
}

const headerStyle ={
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
export default Header
