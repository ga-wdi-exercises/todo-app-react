import React, {Component} from 'react'
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      new: '',
      todos: [
        'first todo',
        'second todo',
        'Brush up on Javascript'
      ]
    }
  }
  newChange(e){
    this.setState({
      new: e.target.value
    })
  }

  createTodo(e){
    e.preventDefault()
    this.setState({
      todos: this.state.todos.concat([this.state.new])
    })
    this.refs.new.value = ''
  }
  render() {
    let todos = this.state.todos.map((todo, index) => {
      return <Todo content={todo} key={index} />
    })
    return (
      <div>
      <form onSubmit={e => this.createTodo(e)}>
        <input type="text" placeholder="add a todo" ref="new" onChange={e => this.newChange(e)} />
      </form>
      <ul>
        {todos}
      </ul>
      </div>
    )
  }
}
export default App
