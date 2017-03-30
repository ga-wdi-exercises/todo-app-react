import React, { Component } from 'react'
import TodoList from './TodosList'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className='app'>
      <div className="list-group">
        <h1>TodoApp</h1>
        </div>
        <div className="list-group-item">
        <TodoList />
        </div>
      </div>
    )
  }
}

export default App
