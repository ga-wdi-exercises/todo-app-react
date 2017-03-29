import React, { Component } from 'react'
import List from './List'

class Home extends Component {
  render(){
    return(
      <div className='app'>
        <h1>Todo App</h1>
        <List />
      </div>
    )
  }
}

export default Home
