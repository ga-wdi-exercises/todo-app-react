import React, { Component } from 'react'
import Todos from './Todos'
import seedData from './TodosSeed.js'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Todos',
      todos: seedData
    }
  }
  render() {
    return(
      <div className='todo-list'>
        <h2>{ this.state.title }</h2>
        <Todos todos={ this.state.todos }/>
      </div>
    )
  }

}


export default TodoList
