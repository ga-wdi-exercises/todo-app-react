import React, { Component } from 'react'
import Todo from './Todo'

class NewTodo extends Component {
  constructor(props){
    super()
    this.state = props
  }
  change(e){
    this.setState({
      newTodo:e.target.value
    })
  }
  create(e){
    e.preventDefault()
    this.props.onCreate(this.state.newTodo)
    this.setState({NewTodo: ''})
  }

  addTodo(text){
    let todos = this.state.todos
    todos.push(text)
    this.setState({todos})
  }
  delete(index){
    let todos = this.state.todos
    todos.splice(index, 1)
    this.setState({todos})
    console.log(this.state)
  }

  render(){
    return(
      <form onSubmit={ e => this.create(e) }>
        <input type='text' value={this.state.newTodo} onChange={ e => this.change(e) } />
      </form>
    )
  }
}

export default NewTodo
