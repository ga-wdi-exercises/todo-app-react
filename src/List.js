import React, { Component } from 'react'
import Todo from './Todo'
import AddTodoForm from './AddTodoForm'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Todos',
      todos: '',
      add: false,
      newTitle: '',
      newText: ''
    }
  }
  toggleNewTodo(event) {
    event.preventDefault()
    this.setState({
      addTodo: true
    })
  }
  setNewTodoTitle(event) {
    this.setState({
      newTodoTitle: event.target.value
    })
  }
  setNewTodoText(event) {
    this.setState({
      newTodoText: event.target.value
    })
  }
  addNewTodo(event) {
    event.preventDefault()
    let newTodo={
      title: this.state.newTodoTitle,
      text: this.state.newTodoText,
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
    }
    removeTodo(event) {
      let index = parseInt(event.target.value, 10)
      let newTodoSet = this.state.todos.slice()
      newTodoSet.splice(index, 1)
      this.setState({
        todos: newTodoSet
      })
    }

    render() {
      let todos = this.state.todos.map((todo, index) => {
        return(
          <Todo
          todo={ todo }
          completed={ todo.completed }
          key={ index }
          index={ index }
          removeTodo={ (event) => this.removeTodo(event)} />
        )
      })
      return(
        <div className='todolist'>
        <h2>{ this.state.addTodo }</h2>
        { todos }
          <AddTodoForm
            addTodo={ this.state.addTodo }
            newTodo={ this.state.newTodo }
            toggleNewTodo={ (event) => this.toggleNewTodo(event) }
            setNewTodoTitle={ (event) => this.setNewTodoTitle(event) }
            setNewTodoBody={ (event) => this.setNewTodoBody(event) }
            addNewTodo={ (event) => this.addNewTodo(event)}
            />
        </div>
      )
    }

}


export default List
