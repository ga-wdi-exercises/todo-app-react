import React, { Component } from 'react'

class NewTodo extends Component {
  render(){
    return(
      <form onSubmit={e => this.props.addSubmit(e)}>
        <input id="name" placeholder="Name" />
        <input id="content" placeholder="Content" />
        <input type="submit" />
      </form>
    )
  }
}

export default NewTodo
