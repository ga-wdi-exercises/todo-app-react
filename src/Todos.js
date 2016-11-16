import React, { Component } from 'react'
import NewTodo from "./AddNewTodo.js"
class Todos extends Component {
  render(){

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
