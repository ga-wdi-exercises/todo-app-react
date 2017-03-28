import React, {Component} from 'react'

class New extends Component {
  render () {
    return (
      <form onSubmit={e => this.props.create(e)}>
        <input
          type="text"
          value={this.props.newContent}
          placeholder="add a todo"
          onChange={e => this.props.newChange(e)}
        />
      </form>
    )
  }
}

export default New
