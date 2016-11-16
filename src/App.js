import React, { Component } from 'react';
import Input from './Input'
import ToDoContainer from './ToDoContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          task: "Make a To Do app in React",
          completed: false,
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <h1>DO IT!</h1>
        <Input />
        <ToDoContainer />
      </div>
    )
  }
}

export default App
