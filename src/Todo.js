import React, {Component} from 'react'

class Todo extends Component {
  render () {
    return (
      <li>
        {this.props.content}
      </li>
    )
  }
}

export default Todo
