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

  markComplete() {
    this.setState({
      completed: true
    })
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
            &#10003;
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
            <button onClick={() => this.markComplete() }></button>
          </div>
        </div>
      )
    }
  }
}

export default Todo
