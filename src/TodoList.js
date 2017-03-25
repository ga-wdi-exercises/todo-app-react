import React, { Component } from 'react'
import Todos from './Todo'
import AddTodoForm from './AddTodoForm'
import seeds from '.seeds.js'

class TodoList extends Component {
  constructor(props) {
    super (props)
    this.state = {
      title: 'Todos',
      todos: seeds,
      addTodo: false,
      newTodoTitle: '',
      newTodoBody: ''
    }
  }

  toggleNewTodo(e) {
    e.preventDefault()
    this.setState({
      addTodo: true
    })
  }
  setNewTodoTitle(e) {
    console.log(e.target.value)
    this.setState({
      newTodoTitle: e.target.value
    })
  }
  setNewTodoBody(e) {
    console.log(e.target.value)
    this.setState({
      newTodoBody: e.target.value
    })
  }
  addNewTodo(e) {
    e.preventDefault()
    let newTodo={
      title: this.state.newTodoTitle,
      body: this.state.newTodoBody,
      completed: false
    }
    let newTodoSet = this.state.todos.slice()
    newTodoSet.push(newTodo)
    this.setState({
      todos: newTodoSet,
      addTodo: false,
      newTodoTitle: '',
      newTodoBody: ''
    })
    console.log(newTodo)
  }

  removeTodo(e) {
    let index = parseInt(e.target.value, 10)
    let newTodoSet = this.state.todos.slice()
    newTodoSet.splice(e.target.value, 1)
    this.setState({
      todos: newTodoSet
    })
  }

  render() {
    let todos = this.state.todos.map((todo, index) => {
      return(


        <Todo
          todo={todo}
          completed={ todo.completed }
          key={index}
          index={index}
          removeTodo={ (e) => this.removeTodo(e)}
        />
      )
    })
    return(
      <div className='todo-list'>
      <h2>{ this.state.title }</h2>
      { todos }
      <AddTodoForm
        addTodo={ this.state.addTodo }
        newTodo={ this.state.newTodo }
        toggleNewTodo{ (e) => this.toggleNewTodo(e) }
        setNewTodoTitle={ (e) => this.setNewTodoTitle(e) }
        setNewTodoBody={ (e) => this.setNewTodoBody(e) }
        addNewTodo={ (e) => this.addNewTodo(e)}
      />
      </div>
    )
  }
}

export default TodoList
