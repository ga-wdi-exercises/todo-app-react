import React, { Component } from 'react'
import ReactDom from 'react-dom'
// import Todo from "./Todo"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {task: "Take out trash.", done: false},
        {task: "Watch Netflix.", done: false},
        {task: "Call mom.", done: false},
        {task: "Play softball.", done: false},
        {task: "Buy ketchup.", done: false}
      ]
    }
  }
  handleNew(event){
    todo.push({
      task: event.target.value,
      done: false
    })
  }
  handleDone(event){
      event.preventDefault()
      this.setState({done: true})
    }

  render(){
    console.log(this.state.todos)
    let todos = this.state.todos.map((todo, index) => {
      return <div className="task">
        {todo.task}
        <button onClick={(event) => this.handleDone(event)} type="submit"value={todo.task}>Done</button>
      </div>
    })
    return(
      <div>
        <h1>Todos</h1>
        {todos}
        <form>
          <input onChange={(event) => this.handleNew(event)} type="text" placeholder="New Todo"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default App;
