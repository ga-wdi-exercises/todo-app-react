import React, { Component } from 'react'
import ToDo from './Todo'
import AddToDoFormField from './NewTodo'


class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Todos',
      todos: seeds,
      addTodo: false,
      newTodoTitle: '',
      newTodoBody: ''
    }
  }
  toggleNewTodo(evt) {
    evt.preventDefault()
    this.setState({
      addTodo: true
    })
  }
  setNewTodoTitle(evt) {

    this.setState({
      newTodoTitle: evt.target.value
    })
  }
  setNewTodoBody(evt) {

    this.setState({
      newTodoBody: evt.target.value
    })
  }

  addNewTodo(evt) {
    evt.preventDefault()
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

  }

  removeTodo(evt) {
    let index = parseInt(evt.target.value, 20)
    let newTodoSet = this.state.todos.slice()
    newTodoSet.splice(index, 1)
    this.setState({
      todos: newTodoSet
    })
  }

  seteditTodoTitle(evt) {

    this.setState({
      newTodoTitle: evt.target.value
    })
  }

  seteditTodoBody(evt) {

    this.setState({
      newTodoBody: evt.target.value
    })
  }
  editTodo(evt) {
    evt.preventDefault()
    let editedTodo={
      title: this.state.editTodoTitle,
      body: this.state.editTodoBody,
      completed: false
    }
    let editTodoSet = this.state.todos.slice()
    editTodoSet.push(editedTodo)
    this.setState({
      todos: editTodoSet,
      addTodo: false,
      editTodoTitle: '',
      editTodoBody: ''
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
          removeTodo={ (evt) => this.removeTodo(evt)}
          editTodo={(evt) => this.editTodo(evt)}
        />
      )
    })
    return(
      <div className='todo-list'>
        <h2>{ this.state.title }</h2>
        { todos }
        <AddTodoFormField
          addTodo={ this.state.addTodo }
          newTodo={ this.state.newTodo }
          toggleNewTodo={ (evt) => this.toggleNewTodo(evt) }
          setNewTodoTitle={ (evt) => this.setNewTodoTitle(evt) }
          setNewTodoBody={ (evt) => this.setNewTodoBody(evt) }
          addNewTodo={ (evt) => this.addNewTodo(evt)}
        />
      </div>
    )
  }

}


export default Todos