import React, { Component } from 'react'

class TitleContainer extends Component {
  render() {
    return (
      <div className="titleContainer">
        <div className="row">
          <div className="title" onClick={this.props.onBodyToggle}>{this.props.title}</div>
          <img className="menuButton" src="../burger.png" alt="menu button"/>
        </div>
        {/* TODO: add filter container here */}
      </div>
    )
  }
}

export default TitleContainer
