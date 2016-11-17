import React, { Component } from 'react'


class Todos extends Component {
  render() {
    let todos = this.props.todos.map((todo, index) => {
      if(todo.completed) {
        return(
          <div className='todo' key={index}>
            <div>
            <h3>{ todo.title }</h3>
            <p>{ todo.body }</p>
            </div>
            <div>
              done!
            </div>
          </div>
        )
      } else {
        return(
          <div className='todo' key={index}>
            <div>
            <h3>{ todo.title }</h3>
            <p>{ todo.body }</p>
            </div>
            <div>
            </div>
          </div>
        )
      }
    })
    return(
      <div>
        { todos }
      </div>
    )
  }
}

export default Todos
