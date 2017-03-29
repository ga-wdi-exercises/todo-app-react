import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.content}
        <button onClick={this.props.delete}>Delete</button>
      </li>
    )
  }
}

export default Todo
