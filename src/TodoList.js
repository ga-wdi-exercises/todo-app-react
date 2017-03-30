import React, { Component } from 'react'import Todos from './Todos'import Todos from './Todo'import AddTodoForm from './AddTodoForm'
 import seeds from '.seeds.js'

 class TodoList extends Component {
   constructor(props) {
     super (props)
     this.state = {
       title: 'Todos',      todos: seeds      todos: seeds,      addTodo: false,      newTodoTitle: '',      newTodoBody: ''
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

    })
     return(
       <div className='todo-list'>
     />
       </div>
     )

 }

 export default TodoList
