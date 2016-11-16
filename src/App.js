import React, {Component} from 'react'

class ToDo extends Component {
    render(){
      return (
        <div>
        <h1>To Do list</h1>
        <p>{this.props.item}</p>
        </div>
      )
    }
}

export default ToDo
