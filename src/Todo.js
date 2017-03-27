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
  render(){
    let {title, text} = this.props.todo
    if(this.state.completed) {
      return(
        <div className='todo'>
          <div>
            <h3>{ title }</h3>
            <p>{ text }</p>
          </div>


          <div>
            <button
            value={this.props.index}
            onClick={(event) => this.props.removeTodo(event)}>
            Delete
            </button>
          </div>
        </div>
      )
    } else {
      return(
        <div className='todo'>
          <div>
            <h3>{ title }</h3>
            <p>{ text }</p>
          </div>
          <div>
            <button onClick={() => this.markComplete() }></button>
          </div>
          <div>
            <button
              value={this.props.index}
              onClick={(event) => this.props.removeTodo(event)}>
              Delete
            </button>
          </div>
        </div>
      )
    }
  }
}

export default Todo
