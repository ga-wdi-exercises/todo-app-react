import React, {Component} from "react"

class TodoList extends Component{
  render(){
    let results = this.props.todoArr.map( (todo, i) => {
      return(
        <li key={i} onClick={this.props.sendIndex(i)}>{todo.todo} - {todo.desc}
          <input
            type="button"
            onClick={ e => this.props.onEditTodo(e) }
            value={"Edit" +" "+ todo.todo} />
        </li>
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
