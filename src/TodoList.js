import React, {Component} from "react"

class TodoList extends Component{
  render(){
    let results = this.props.todoArr.map( (todo, i) => {
      return(
        <li key={i}>{todo.todo} - {todo.desc}</li>
      )
    })
    return(
      <div>
        <ul>
          {results}
        </ul>
      </div>
    )
  }
}

export default TodoList
