import React, { Component } from "react"
import Todos from "./Todos.js"
import NewTodo from "./AddNewTodo.js"

const incompleted = [
  {name: "Laundry", content: "Throw some clothes into the washer." },
  {name: "Dishes", content: "Wash the dishes"}
]
class TodosContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: this.props.incompleted
    }
  }
  handleSubmit(e){
    let newName = document.getElementById("name").value
    let newContent = document.getElementById("content").value
    e.preventDefault()
    console.log(incompleted)
    incompleted.push({name: newName, content: newContent})
    this.setState({
      list: incompleted
    })
  }

  render(){
    return(
      <div>
      <h1> Todo List </h1>
        <Todos incompleted={incompleted}/>
        <NewTodo
        addSubmit={e => this.handleSubmit(e)}
         />
      </div>
    )
  }
}
export default TodosContainer
