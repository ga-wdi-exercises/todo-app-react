import React, { Component } from 'react'


class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: this.props.completed
    }
  }

  Completed() {
    this.setState({
      completed: true
    })
  }
  render() {
    let {title, body} = this.props.todo
    if(this.state.completed) {
      return(
        <div className='all'>
          <div>
          <h3>{title }</h3>
          <p>{body }</p>
          </div>
          <div>
            <button
              value={this.props.index}
              onClick={(evt) => this.props.removeTodo(evt)}>
                Remove
            </button>
          </div>
        </div>
      )
    } else {
      return(
        <div className='todo'>
          <div>
          <h3>{title }</h3>
          <p>{body }</p>
          </div>
          <div>
            <button onClick={() => this.Completed() }></button>
          </div>
          <div>
            <button
              value={this.props.index}
              onClick={(evt) => this.props.removeTodo(evt)}>
                Remove
            </button>
          </div>
        </div>
      )
    }
  }
}

export default Todo
