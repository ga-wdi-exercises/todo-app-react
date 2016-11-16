import React, { Component } from 'react';
import ToDo from './ToDo'

class ToDoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: ""
    }
  }

  render() {

    // gather all To Dos

    return (
      <ToDo />
    )

  }

}

export default ToDoContainer
