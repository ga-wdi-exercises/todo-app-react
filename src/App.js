import React, {Component} from 'react';
import Container from './Container';

let todos=[];

class Todo extends Component {
  constructor(props) {
      super(props);

      this.state = {
          todos
      };
  }

  render() {
    return(
      <div>
      <h1>React Todos App</h1>
      <Container />
      </div>
    )
  }
}
export default Todo
