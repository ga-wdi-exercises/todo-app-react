import React, {Component} from "react"
import TodoContainer from "./TodoContainer"

class TodoApp extends Component{
  render(){
    return(
      <div>
        <h1>Todos Bruh</h1>
        <TodoContainer />
      </div>
    )
  }
}

export default TodoApp
