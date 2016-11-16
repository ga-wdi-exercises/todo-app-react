import React, {Component} from 'react';
import TodosList from './ToDosList';

class Todo extends Component {


  render() {
    return(
      <div>
      <h1>React Todos App</h1>
      <TodosList />
      </div>
    )
  }
}
export default Todo
