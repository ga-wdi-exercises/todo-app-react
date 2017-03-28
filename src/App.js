import React, {Component} from 'react'
import Todo from './Todo'
import New from './New'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newContent: '',
      todos: [
        {content: 'a'},
        {content: 'b'},
        {content: 'c'},
        {content: 'd'},
        {content: 'e'}
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

  render() {
    let todos = this.state.todos.map((todo, i) => {
      return (
        <Todo
          i={i}
          key={i}
          content={todo.content}
          delete={() => this.delete(i)}
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
