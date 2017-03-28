import React, {Component} from 'react'
import Todo from './Todo'
import New from './New'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newContent: '',
      todos: [
        {content: 'aaaaa', isBeingEdited: false},
        {content: 'bbbbb', isBeingEdited: false},
        {content: 'ccccc', isBeingEdited: false},
        {content: 'ddddd', isBeingEdited: false},
        {content: 'eeeee', isBeingEdited: false}
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

  render() {
    let todos = this.state.todos.map((todo, i) => {
      return (
        <Todo
          key={i}
          content={todo.content}
          delete={() => this.delete(i)}
          isBeingEdited={todo.isBeingEdited}
          startEditing={() => this.startEditing(i)}
          edit={e => this.edit(e, i)}
          stopEditing={e => this.stopEditing(e, i)}
        />
      )
    })
    return (
      <div>
        <New
          newContent={this.state.newContent}
          newChange={e => this.newChange(e)}
          create={e => this.create(e)}
        />
        <div>
          {todos}
        </div>
      </div>
    )
  }
}

export default App
