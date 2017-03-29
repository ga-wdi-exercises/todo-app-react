import React, {Component} from 'react'

class Todo extends Component {
  render () {
    if (this.props.isBeingEdited) {
      return (
        <li>
          <form onSubmit={e => this.props.stopEditing(e)}>
            <input
              type="text"
              value={this.props.content}
              onChange={e => this.props.edit(e)}
            />
          </form>
          <button onClick={this.props.delete}>x</button>
        </li>
      )
    } else {
      return (
        <li>
          <input type="checkbox" value={this.props.complete} onChange={this.props.toggleComplete} />
          <span onClick={this.props.startEditing}>{this.props.content}</span>
          <button onClick={this.props.delete}>x</button>
        </li>
      )
    }
  }
}

export default Todo
