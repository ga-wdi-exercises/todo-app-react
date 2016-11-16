import React, {Component} from 'react'

class ListItems extends Component {
  render () {
    return (
      <div>
        <p>{this.props.body}
          <button onClick={(e) => this.handleClick(e)}> Delete {this.props.key} To do </button>
          </p>
      </div>
    )
  }
}

export default ListItems
