import React, {Component} from 'react'
import Todo from './Todo'
import New from './New'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newContent: '',
      todos: [
        {content: 'aaaaa', isBeingEdited: false, isComplete: false},
        {content: 'bbbbb', isBeingEdited: false, isComplete: false},
        {content: 'ccccc', isBeingEdited: false, isComplete: false},
        {content: 'ddddd', isBeingEdited: false, isComplete: false},
        {content: 'eeeee', isBeingEdited: false, isComplete: false}
      ]
    }
  }

  copyTodos() {
    return this.state.todos.map(todo => Object.assign({}, todo))
  }

  editNew(e) {
    this.setState({
      newContent: e.target.value
    })
  }

  create(e) {
    e.preventDefault()
    let todos = this.copyTodos()
    let newTodo = {content: this.state.newContent,
                   isBeingEdited: false,
                   isComplete: false}
    todos = [...todos, newTodo]
    this.setState({
      newContent: '',
      todos
    })
  }

  startEditing(i) {
    let todos = this.copyTodos()
    todos[i].isBeingEdited = true
    this.setState({
      todos
    })
  }

  edit(e, i) {
    let todos = this.copyTodos()
    todos[i].content = e.target.value
    this.setState({
      todos
    })
  }

  stopEditing(e, i) {
    e.preventDefault()
    let todos = this.copyTodos()
    todos[i].isBeingEdited = false
    this.setState({
      todos
    })
  }

  toggleComplete(i) {
    let todos = this.copyTodos()
    todos[i].isComplete = !todos[i].isComplete
    this.setState({
      todos
    })
  }

  delete(i) {
    let todos = this.copyTodos()
    todos.splice(i, 1)
    this.setState({
      todos
    })
  }

  render() {
    const todos = {
      complete: [],
      incomplete: []
    }

    const todoComponent = (todo, i) => {
      return (
        <Todo
          key={i}
          content={todo.content}
          isBeingEdited={todo.isBeingEdited}
          isComplete={todo.isComplete}
          startEditing={() => this.startEditing(i)}
          edit={e => this.edit(e, i)}
          stopEditing={e => this.stopEditing(e, i)}
          toggleComplete={() => this.toggleComplete(i)}
          delete={() => this.delete(i)}
        />
      )
    }

    this.state.todos.forEach((todo, i) => {
      let component = todoComponent(todo, i)
      if (todo.isComplete) {
        todos.complete.push(component)
      } else {
        todos.incomplete.push(component)
      }
    })

    return (
      <div>
        <New
          newContent={this.state.newContent}
          editNew={e => this.editNew(e)}
          create={e => this.create(e)}
        />
        <div>
          <h2>Todos</h2>
          <ul>{todos.incomplete}</ul>
        </div>
        <div>
          <h2>Complete Todos</h2>
          <ul>{todos.complete}</ul>
        </div>
      </div>
    )
  }
}

export default App
