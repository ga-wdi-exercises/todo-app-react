import React, { Component } from "react"
import Todos from "./Todos.js"
import NewTodo from "./AddNewTodo.js"

const incompleted = [
  {name: "Laundry", content: "Throw some clothes into the washer." },
  {name: "Dishes", content: "Wash the dishes"}
]
class TodosContainer extends Component {
  render(){
    return(
      <div>
      <h1> Todo List </h1>
        <Todos incompleted={incompleted}/>
        <NewTodo />
      </div>
    )
  }
}
export default TodosContainer
