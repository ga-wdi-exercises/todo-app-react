import React, { Component } from 'react'
import ReactDom from 'react-dom'
// import Todo from "./Todo"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {task: "Take out trash."},
        {task: "Watch Netflix."},
        {task: "Call mom."},
        {task: "Play softball."},
        {task: "Buy ketchup."}
      ]
    }
  }
  render(){
    console.log(this.state.todos)
    let todos = this.state.todos.map((todo, index) => {
      return <div>{todo.task}</div>
    })
    return(
      <div>
        <h1>Todos</h1>
        {todos}
      </div>
    )
  }
}

export default App;
