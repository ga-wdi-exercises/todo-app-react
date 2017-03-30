import React, {Component} from 'react';

class New extends Component {

  render() {
    let todos = this.props.todos.map((todo, index) => {
      return (
        <div key={index}>
          <h3> {todo.new} </h3>
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

export default Options;
