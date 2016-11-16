import React, { Component } from 'react'
import Todo from './Todo'

class NewTodo extends Component {
  constructor(props){
    super()
    this.state = props
  }
  render(){
    return(
      <Todo
       onSubmit={ e => this.create(e) }
       onChange={ e => this.change(e) }
  
    />
  )
  }
  change(e){
    this.setState({
      newTodo: e.target.value
    })
  }
  create(e){
    e.preventDefault()
    this.props.onCreate(this.state.newTodo)
    this.setState({newTodo: ''})
  }
}

export default NewTodo
