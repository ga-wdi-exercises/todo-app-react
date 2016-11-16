import React, { Component } from 'react'

class NoteBodyContainer extends Component {
  render() {
    return (
      <div>
        <div>{this.props.content}</div>
      </div>
    )
  }
}

export default NoteBodyContainer
