import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <div>
        <p>{this.props.body}</p>
        <p></p>
      </div>
      )
    }
  }


export default Item
