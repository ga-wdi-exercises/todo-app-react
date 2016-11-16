import React, {Component} from "react"

class TodoForm extends Component{
  render(){
    return(
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={ e => this.props.onTodoSubmit(e) }>
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
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default TodoForm
