import React, {Component} from 'react';
// import seed_data from './Data';


class Options extends Component {

  render() {
    let todos = this.props.todos.map((todo, index) => {
      return (
        <div key={index}>
          <h4> {todo.option} </h4>
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
