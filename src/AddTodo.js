import React, {Component} from "react"

class AddTodo extends Component{
  render(){
    return(
      <div>
        <h1>Todo Manager</h1>
        <form onSubmit={ e => this.props.onSubmit(e) }>
          <input
            type="text"
            value={this.props.todoName}
            onChange={ e => this.props.onTodoNameInput(e) }
            placeholder="Enter Todo..."/>
          <input
            type="text"
            value={this.props.todoDesc}
            onChange={ e => this.props.onTodoDescInput(e) }
            placeholder="Enter Description..."/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default AddTodo
