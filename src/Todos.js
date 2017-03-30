
import React, { Component } from 'react'
import seedData from './TodosSeed.js'

class Todos extends Component {

  render(){
     let todos = this.props.todos.map((todo, index) => {
      return(
        <div className="todos" key={index}>
          <h3>{ todo. title }</h3>
          <h4>{ todo.body} </h4>
        </div>
      )
    })
    return(
      <div>
        { todos }
      </div>
    )
  }

}

export default Todos
