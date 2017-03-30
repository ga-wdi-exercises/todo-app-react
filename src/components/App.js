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
  createTask(task){
    this.state.todos.push({
      task:task,
      isCompleted: false
    })

    this.setState({
      todos: this.state.todos
    })
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
    foundTodo.task = newTask

    this.setState({
      todos: this.state.todos
    })
  }
  render(){
    return(
      <div>
        <h1>React Todo App</h1>
          <CreateTodo createTask={this.createTask.bind(this)}/>
          <TodosList todos={this.state.todos} createTask={this.createTask.bind(this)} saveTask={this.saveTask.bind(this)}/>

      </div>
    )
  }

}


export default App
