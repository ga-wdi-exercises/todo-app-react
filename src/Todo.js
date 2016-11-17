import React, { Component } from 'react'


class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: this.props.completed
    }
  }

  markComplete() {
    this.setState({
      completed: true
    })
  }
  render() {
    let {title, body} = this.props.todo
    console.log(title, body);
    if(this.state.completed) {
      return(
        <div className='todo'>
          <div>
          <h3>{title }</h3>
          <p>{body }</p>
          </div>
          <div>
            &#10003;
          </div>
          <div>
            <button
              value={this.props.index}
              onClick={(e) => this.props.removeTodo(e)}>
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
            <button onClick={() => this.markComplete() }></button>
          </div>
          <div>
            <button
              value={this.props.index}
              onClick={(e) => this.props.removeTodo(e)}>
                Remove
            </button>
          </div>
        </div>
      )
    }
  }
}

export default Todo
