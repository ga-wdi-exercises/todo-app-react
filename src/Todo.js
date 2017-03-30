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
              onClick={(evt) => this.props.removeTodo(evt)} className="btn btn-info btn-lg">
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
            <button onClick={() => this.Completed() } className="btn btn-info btn-lg"></button>
          </div>
          <div>
            <button
              value={this.props.index}
              onClick={(evt) => this.props.editTodo(evt)} className="btn btn-info btn-lg">
                Edit
            </button>
            <button
              value={this.props.index}
              onClick={(evt) => this.props.removeTodo(evt)} className="btn btn-info btn-lg">
                Remove
            </button>
          </div>
        </div>
      )
    }
  }
}

export default Todo
