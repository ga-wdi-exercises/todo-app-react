import React, { Component } from 'react'
import NewTodo from "./AddNewTodo.js"
class Todos extends Component {
  render(){
    let todos = this.props.incompleted.map((todo, i) => {
      return <li key={i}>{todo.name} </li>
    })
    return(
      <div>
          <h3> Incomplete Todos </h3>
          <ul>
            {todos}
          </ul>
      </div>
    )
  }
}

export default Todos
