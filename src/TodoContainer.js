import React, {Component} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

class TodoContainer extends Component{
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
  handleEditTodo(i){
      let editTodoAnswer = prompt("what do you want to change?")
      let modArr = this.state.todoArr[i].todoName
      modArr.editTodoAnswer
      this.setState({
        todoArr: modArr,
      })

  }
  handleAddSubmit(e){
    e.preventDefault()
    let newTodoArr = this.state.todoArr.concat({todo: this.state.todoName, desc: this.state.todoDesc})

    this.setState({
      todoArr: newTodoArr,
      todoName: "",
      todoDesc: "",
      hasClicked: true,
    })
  }
  render(){
    let todoForm = <TodoForm
    todoName          = {this.state.todoName}
    todoDesc          = {this.state.todoDesc}
    todoArr           = {this.state.todoArr}
    onTodoNameInput   = { e => this.handleTodoNameInput(e)}
    onTodoDescInput   = { e => this.handleTodoDescInput(e)}
    onTodoSubmit      = { e => this.handleAddSubmit(e)}
    />
    if (this.state.hasClicked) {
      return(
        <div>
          {todoForm}
          <TodoList
            todoArr       = {this.state.todoArr}
            onEditTodo    = { (i) => this.handleEditTodo(i)}
          />
        </div>
      )
    } else {
      return(
        <div>
          {todoForm}
        </div>
      )
    }
  }
}

export default TodoContainer
