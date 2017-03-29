
// Developer TODO: add App component
import React, {Component} from 'react'
import TodosList from "./todos-list"
import AddTodo from './add-todo'
import './index.css'
// let hideForm = {
//   display: 'inline'
// }

const todos = [
  {
    task: 'Make React Todo App',
    completed: false
  },
  {
    task: 'Eat Dinner',
    completed: false
  }
]


class Todo extends Component {
  constructor(props){
    super(props)

    this.state= {
      todos
    }
  }

  addTask(task){
    this.state.todos.push({
      task,
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

  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo => todo.task === taskToDelete)
    this.setState({
      todos: this.state.todos
    })
  }

  render(){
    return(
      <div className="container">
        <h1>Todo App</h1>
        <br/>
        <AddTodo  todos={this.state.todos} addTask={this.addTask.bind(this)}/>
        <TodosList
          todos={this.state.todos}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          />
      </div>
    )
  }
}

export default Todo
