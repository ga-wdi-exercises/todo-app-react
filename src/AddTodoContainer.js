import React, {Component} from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

class AddTodoContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoName: "",
      todoDesc: "",
      hasClicked: false,
    }
  }
  handleTodoNameInput(e){
    this.setState({
      todoName: e.target.value,
    })
  }
  handleTodoDescInput(e){
    this.setState({
      todoDesc: e.target.value,
    })
  }
  handleAddSubmit(e){
    this.setState({
      todoName: "",
      todoDesc: "",
      hasClicked: true,
    })
    e.preventDefault()
  }
  render(){
    let addTodo = <AddTodo
                todoName={this.state.todoName}
                todoDesc={this.state.todoDesc}
                onTodoNameInput={ e => this.handleTodoNameInput(e)}
                onTodoDescInput={ e => this.handleTodoDescInput(e)}
                onTodoSubmit={ e => this.handleAddSubmit(e)}
              />
    if (this.state.hasClicked) {
      return(
        <div>
          {addTodo}
          <TodoList />
        </div>
      )
    } else {
      return(
        <div>
          {addTodo}
        </div>
      )
    }
  }
}

export default AddTodoContainer
