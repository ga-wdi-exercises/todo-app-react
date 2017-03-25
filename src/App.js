import React, {Component} from 'react'

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
    return (
      <ul>
        <li>{this.state.todos[0]}</li>
        <li>{this.state.todos[1]}</li>
        <li>{this.state.todos[2]}</li>
      </ul>
    )
  }
}

export default App
