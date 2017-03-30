import React, { Component } from 'react'
import CreateTodo from './CreateTodo'
import TodosList from './TodosList'

const todos = [
{
  task: 'go to chiptole for lunch',
  isCompleted: true
},
{
  task: 'react homework',
  isCompleted: false
},
  {
    task: 'learn redux',
    isCompleted: false

  },
  {
    task: 'go to meetup',
    isCompleted: true
  }
]

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todos:todos
    }
  }
  render(){
    return(
      <div>
        <h1>React Todo App</h1>
          <CreateTodo createTask={this.createTask.bind(this)}/>
          <TodosList todos={this.state.todos} createTask={this.createTask.bind(this)}/>
      </div>
    )
  }
  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    })
    this.setState({ todos: this.state.todos})
  }
}


export default App
