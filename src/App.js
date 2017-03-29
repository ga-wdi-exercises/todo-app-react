import React, {Component} from 'react'
import Todo from './Todo'
import New from './New'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newContent: '',
      todos: [
        {content: 'aaaaa', isBeingEdited: false, complete: false},
        {content: 'bbbbb', isBeingEdited: false, complete: false},
        {content: 'ccccc', isBeingEdited: false, complete: false},
        {content: 'ddddd', isBeingEdited: false, complete: false},
        {content: 'eeeee', isBeingEdited: false, complete: false}
      ]
    }
  }

  newChange(e) {
    this.setState({
      newContent: e.target.value
    })
  }

  create(e) {
    e.preventDefault()
    this.setState({
      newContent: '',
      todos: this.state.todos.concat({content: [this.state.newContent]})
    })
  }

  delete(i) {
    let todos = this.state.todos
    todos.splice(i, 1)
    this.setState({
      todos
    })
  }

  startEditing(i) {
    let todos = this.state.todos
    todos[i].isBeingEdited = true
    this.setState({
      todos
    })
  }

  edit(e, i) {
    let todos = this.state.todos
    todos[i].content = e.target.value
    this.setState({
      todos
    })
  }

  stopEditing(e, i) {
    e.preventDefault()
    let todos = this.state.todos
    todos[i].isBeingEdited = false
    this.setState({
      todos
    })
  }

  toggleComplete(i) {
    let todos = this.state.todos
    todos[i].complete = !todos[i].complete
    this.setState({
      todos
    })
    console.log('Hi!')
  }

  render() {
    let todos = this.state.todos.map((todo, i) => {
      if (!todo.complete) {
        return (
          <Todo
            key={i}
            content={todo.content}
            delete={() => this.delete(i)}
            isBeingEdited={todo.isBeingEdited}
            startEditing={() => this.startEditing(i)}
            edit={e => this.edit(e, i)}
            stopEditing={e => this.stopEditing(e, i)}
            toggleComplete={() => this.toggleComplete(i)}
          />
        )
      }
    })
    let completedTodos = this.state.todos.map((todo, i) => {
      if (todo.complete) {
        return (
          <Todo
            key={i}
            content={todo.content}
            delete={() => this.delete(i)}
            isBeingEdited={todo.isBeingEdited}
            startEditing={() => this.startEditing(i)}
            edit={e => this.edit(e, i)}
            stopEditing={e => this.stopEditing(e, i)}
            toggleComplete={() => this.toggleComplete(i)}
          />
        )
      }
    })
    return (
      <div>
        <New
          newContent={this.state.newContent}
          newChange={e => this.newChange(e)}
          create={e => this.create(e)}
        />
        <div>
          <h2>Todos</h2>
          {todos}
        </div>
        <div>
          <h2>Competed Todos</h2>
          {completedTodos}
        </div>
      </div>
    )
  }
}

export default App
