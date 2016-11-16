import React, { Component } from "react"
import Todos from "./Todos.js"
import NewTodo from "./AddNewTodo.js"
import EditTodo from "./EditTodo.js"

class TodosContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: props.incompleted,
      checkbox: document.getElementById("checkbox")
    }
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(this);
    let newName = document.getElementById("name").value
    let newContent = document.getElementById("content").value
    let oldItems = this.state.list.slice()
    oldItems.push({name: newName, content: newContent})
    this.setState({
      list: oldItems
    })
  }
  handleChange(e, i){
    // let list = this.state.list[0]
    console.log(i)
    e.preventDefault()
  }

  render(){
    let todos = this.props.incompleted.map((todo, i) => {
      return <li key={i}><input id="checkbox" type="checkbox"/>{todo.name}<button onClick={e => this.handleChange(e, i)} id={i}>Edit</button></li>
    })
    return(
      <div>
      <h1> Todo List </h1>

        <div>
            <h3> Incomplete Todos </h3>
            <ul>
              {todos}
            </ul>
        </div>
        <NewTodo
        addSubmit={e => this.handleSubmit(e)}
         />
      </div>
    )
  }
}
export default TodosContainer
