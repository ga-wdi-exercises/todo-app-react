import React, { Component } from 'react'

class AddTodoForm extends Component {
  render() {
    if(!this.props.addTodo){
      return(
        <button onClick={(e) => this.props.toggleNewTodo(e) }>Add Todo</button>
      )
    } else {
      return(
        <form onSubmit={(e) => this.props.addNewTodo(e)}>
          <input type="text" placeholder="Title" onChange={(e) => this.props.setNewTodoTitle(e)}/>
          <input type="text" placeholder="Details" onChange={(e) => this.props.setNewTodoBody(e)}/>
          <button type="submit">Add Todo</button>
        </form>
      )
    }
  }
}


export default AddTodoForm
