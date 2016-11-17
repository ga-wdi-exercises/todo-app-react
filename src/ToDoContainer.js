import React, { Component } from 'react';
import ToDo from './ToDo'

class ToDoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: ""
    }
  }

  render() {

    return (
      <div className="todo-container">
        {this.props.todos.map( (todo, i) => {
          return <ToDo
            task={todo.task}
            completed={todo.completed}
            key={i}
          />
        })}
      </div>
    )

  }

}

export default ToDoContainer
