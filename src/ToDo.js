import React, { Component } from 'react';

class ToDo extends Component {

  render() {
    return (
      <div className="todo">
        <label><input type="checkbox" key={this.props.id} defaultChecked={this.props.completed}></input>{this.props.task}</label>
      </div>
    )

  }

}

export default ToDo
