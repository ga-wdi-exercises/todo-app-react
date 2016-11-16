import React, {Component} from 'react'
import CreateTodo from './create-todo'
import TodosList from './todos-list'

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos
    }
  }

  render() {
    return (
    <div>
      <h1>React ToDos App Baaaaabbbyyy</h1>
      <CreateTodo />
      <TodosList todos={this.state.todos} />
    </div>
    )
  }
}

export default App
