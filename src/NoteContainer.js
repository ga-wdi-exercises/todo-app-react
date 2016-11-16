import React, { Component } from 'react'
import TitleContainer from './TitleContainer.js'
import NoteBodyContainer from './NoteBodyContainer.js'

class NoteContainer extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    }
  }

  handleBodyToggle(e) {
    this.setState({
      collapsed: this.state.collapsed ? false : true
    })
  }

  render() {
    let displayedBody =
      <NoteBodyContainer
        content={this.props.note.content}/>
    if (this.state.collapsed === true) {
      displayedBody = ""
    }
    return (
      <div className="note">
        <TitleContainer
          title={this.props.note.title}
          onBodyToggle={ e => this.handleBodyToggle(e) }/>
        {displayedBody}
      </div>
    )
  }
}

export default NoteContainer
