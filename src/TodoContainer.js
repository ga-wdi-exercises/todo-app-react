import React, { Component } from 'react';
import TodoList from './TodoList.js';

class TodoContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      completion: false,
      tasks: [
            {title:  "Feed the Dog", content: "Feed the dog at 8PM. Two cans of dog food", completion: true},
            {title: "Pick up Brother from the airport.", content: "Pick up brother at 9PM this Friday", completion: false},
            {title: "Clean the Kitchen", content: "Sweep and mop floors.", completion: false}
          ]
    }
  }

  render(){
    return(
      <div>
      <h1> To Do List </h1>
        <TodoList tasks={this.state.tasks} />
      </div>
    )
  }

}

export default TodoContainer
