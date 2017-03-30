import React, {Component} from 'react';


class Tasks extends Component {

  render() {
    let todos = this.props.todos.map((todo, index) => {
      return (
        <div key={index}>
          <h2> {todo.task} </h2>
        </div>
      )
    })
    return (
      <div>
        {todos}
      </div>
    )
  }
}

export default Tasks;
