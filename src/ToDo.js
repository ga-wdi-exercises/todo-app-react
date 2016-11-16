import React, { Component } from 'react';
import './ToDo.css'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state= {
      editing: false,
    }
  }

  onEditing() {
    this.setState({editing: true})

  }

  render() {
    let readToDo = (
      <div className="todo">
        <label><input type="checkbox" key={this.props.id} defaultChecked={this.props.completed}></input>{this.props.task}</label>
        <a href="#" onClick={e => this.handleEditing(e)} className="edit-link">edit</a>
      </div>
    )

    let editToDo = (
      <div className="todo">
        <input type="text" key={this.props.id} defaultValue={this.props.task} />
        <a href="#" onClick={e => this.handleEditing(e)} className="save-link">save</a>
      </div>

    )

    return (
      this.state.editing ? editToDo : readToDo
    )

  }

}

export default ToDo
