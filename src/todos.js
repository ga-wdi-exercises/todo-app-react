import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Todos extends Component {

  render() {
    let todos = this.props.todos.map((todo, i) => {
      let pathname = `/todo/${todo.name}`
      return <li key={i}>
                <Link to={{
                    pathname,
                    state: {toDo: todo}
                  }}>
                  {todo.name}
                </Link>
             </li>
    })
    return(
      <div>
        <h1> here is the todo componet </h1>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

export default Todos
