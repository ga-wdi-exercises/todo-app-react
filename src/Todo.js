import React, {Component} from 'react'

class Todo extends Component {
  render () {
    const contentComponent = () => {
      if (this.props.isBeingEdited) {
        return (
          <form onSubmit={e => this.props.stopEditing(e)}>
            <input
              type="text"
              value={this.props.content}
              onChange={e => this.props.edit(e)}
            />
          </form>
        )
      } else {
        return (
          <span onClick={this.props.startEditing}>
            {this.props.content}
          </span>
        )
      }
    }
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.isComplete}
          onChange={this.props.toggleComplete}
        />
        {contentComponent()}
        <button onClick={this.props.delete}>x</button>
      </li>
    )
  }
}

export default Todo
