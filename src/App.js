// Developer TODO: add App component

import React, { Component } from 'react'
import TodoList from './TodoList'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className='app'>
        <h1>TodoApp</h1>
        <TodoList />
      </div>
    )
  }
}

export default App
