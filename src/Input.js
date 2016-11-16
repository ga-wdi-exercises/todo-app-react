import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <form onSubmit={e => this.props.onToDoSubmit(e)}>
        <input type="text" placeholder="add a to-do here"></input>
      </form>
    )

  }

}

export default Input
