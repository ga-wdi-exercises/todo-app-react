import React, { Component } from "react"

class Todo extends Component {
  render() {
    const currentTodos = this.props.todos.map((todo, index) => {
      return (
          <li key={index}>{todo.title}: {todo.body}</li>
      )
    })
    return(
      <div className="todo">
        <h1>Todos</h1>
        <p>{this.props.title}</p>
        <p>{this.props.body}</p>

        <h2>New Todo</h2>
        <input onChange={(e) => this.props.onTitleChange(e)} type="text" placeholder="Title" value={this.props.title}/>
        <input onChange={(e) => this.props.onBodyChange(e)} type="text" placeholder="Todo" value={this.props.body}/>
        <button onClick={(e) => this.props.onNewSubmit(e)} type="submit">Submit</button>
        <ul>
          {currentTodos}
        </ul>

      </div>
    )
  }
}

export default Todo
