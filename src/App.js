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

  create(e){
    e.preventDefault()
    this.setState({
      todos: this.state.todos.concat([this.state.new])
    })
    this.refs.new.value = ''
  }
  delete(i){
    let todosCopy = this.state.todos
    todosCopy.splice(i, 1)
    this.setState({
      todos: todosCopy
    })
  }
  render() {
    let todos = this.state.todos.map((content, i) => {
      return <Todo content={content} i={i} key={i} delete={() => this.delete(i)} />
    })
    return (
      <div>
      <form onSubmit={e => this.create(e)}>
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
