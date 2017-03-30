// Developer TODO: add App component
import React, { Component } from "react"
import Todo from "./Todo"

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      body: "",
      todos: []
    }
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleBody(e) {
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let newTodos = this.state.todos
    newTodos.push({
      title: this.state.title,
      body: this.state.body
    })
    this.setState({
      todos: newTodos,
      title: "",
      body: ""
    })
  }

  render() {
    return(
      <Todo
        title={this.state.title}
        body={this.state.body}
        todos={this.state.todos}
        onTitleChange={(e) => this.handleTitle(e)}
        onBodyChange={(e) => this.handleBody(e)}
        onNewSubmit={(e) => this.handleSubmit(e)}
      />
    )
  }

}

export default App
