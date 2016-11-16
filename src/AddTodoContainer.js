import React, {Component} from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

class AddTodoContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoName: "",
      todoDesc: "",
      todoArr: [],
      hasClicked: false,
    }
    this.handleTodoNameInput = this.handleTodoNameInput.bind(this)
    this.handleTodoDescInput = this.handleTodoDescInput.bind(this)
    this.handleAddSubmit     = this.handleAddSubmit.bind(this)
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
    e.preventDefault()
    let newTodoArr = this.state.todoArr.concat({todo: this.state.todoName, desc: this.state.todoDesc})
    console.log(this.state.todoArr)

    this.setState({
      todoArr: newTodoArr,
      todoName: "",
      todoDesc: "",
      hasClicked: true,
    })
  }
  render(){
    let addTodo = <AddTodo
                todoName={this.state.todoName}
                todoDesc={this.state.todoDesc}
                todoArr={this.state.todoArr}
                onTodoNameInput={ e => this.handleTodoNameInput(e)}
                onTodoDescInput={ e => this.handleTodoDescInput(e)}
                onTodoSubmit={ e => this.handleAddSubmit(e)}
              />
    if (this.state.hasClicked) {
      return(
        <div>
          {addTodo}
          <TodoList
            todoArr={this.state.todoArr}
          />
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
