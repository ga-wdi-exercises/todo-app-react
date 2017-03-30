import React, { Component } from 'react'

class Marker extends Component {
    render() {
      let Todo = this.props.Todo.map((todo,index) => {
        return (
          <div key={index}>
            <p>{todo.item}</p>
          </div>
        )
      })
      return (
        <div>
          {Todo}
        </div>
      )
    }
}

export default Marker
