import React, { Component } from 'react';
import Input from './Input'
import ToDoContainer from './ToDoContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 0,
          task: "Do laundry",
          completed: true,
        },
        {
          id: 1,
          task: "Make a To Do app in React",
          completed: false,
        },
        {
          id: 2,
          task: "Make my portfolio site",
          completed: false,
        }
      ]
    }
  }

  handleToDoSubmit(e) {
    e.preventDefault()
    let newToDo = {
      task: e.target.firstChild.value,
      completed: false,

      // not a great way to handle IDs I bet. Should I generate a random hash instead?
      id: this.state.todos.length
    }

    let updatedList = this.state.todos.concat(newToDo)
    this.setState({todos: updatedList})

    e.target.firstChild.value = ""
  }


  render() {
    return (
      <div>
        <h1>DO IT!</h1>
        <Input
          onToDoSubmit={e => this.handleToDoSubmit(e)}
        />
        <ToDoContainer todos={this.state.todos} />
      </div>
    )
  }
}

export default App
