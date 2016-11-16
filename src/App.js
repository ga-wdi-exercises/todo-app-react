import React, { Component } from 'react'
import NewTodo from './NewTodo'

class App extends Component {
  render(){
    return(
    <div className="App">
      <h1>Todo</h1>
      <NewTodo
      />
    </div>
    )
  }
}

export default App
