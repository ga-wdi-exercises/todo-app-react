import React, { Component } from 'react'


class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      body: this.props.body,
      completed: this.props.completed
    }
  }
  render() {
    if(this.state.completed) {
      return(
        <div className='todo'>
          <div>
          <h3>{ this.state.title }</h3>
          <p>{ this.state.body }</p>
          </div>
          <div>
            done!
          </div>
        </div>
      )
    } else {
      return(
        <div className='todo'>
          <div>
          <h3>{ this.state.title }</h3>
          <p>{ this.state.body }</p>
          </div>
          <div>
          </div>
        </div>
      )
    }
  }
}

export default Todo
