import React, { Component } from 'react'


class CreateTodo extends Component {
  handleCreate(e){
    e.preventDefault()
    this.props.createTask(this.refs.createInput.value)
    this.refs.createInput.value = ''
  }
render(){
  return(
    <form onSubmit={this.handleCreate.bind(this)}>
      <input type="text" placeholder="tasks" ref="createInput"/>
      <button>Create</button>
    </form>

    )
  }
}


export default CreateTodo
