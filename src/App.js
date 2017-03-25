import React, {Component} from 'react'
import Todo from './Todo.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        'first todo',
        'second todo',
        'third todo'
      ]
    }
  }
  
  render() {
    let todos = this.state.todos.map((todo, index) => {
      return <Todo content={todo} key={index} />
    })
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default App
