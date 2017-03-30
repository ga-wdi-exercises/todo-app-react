import React, { Component } from 'react'
import Marker from './Marker'

var seed = [
  {item: "Walk the dog", status: false},
  {item: "Finish filing taxes", status: false},
  {item: "Clean the garage", status: false},
  {item: "Make dinner", status: false},
  {item: "Finish homework", status: false}
]

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: seed
    }
  }
  render() {
    return(
      <div>
        <h2>List</h2>
        <Options todos={this.state.todos}
      </div>
    )
  }
}

export default List
