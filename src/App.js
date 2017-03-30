// Developer TODO: add App component
import React, { Component } from 'react';
import './App.css'

class Todo extends Component {
  render() {
    let items = this.props.items.map( (item, index) => {
    return <li key={index}>{item}</li>;
    })
    return (
      <div>
        <h1> My Todo List </h1>
          <div className="wrapper">
            <ul> <li> {items} </li> </ul>
          </div>
      </div>
    )
  }
}

export default Todo;
