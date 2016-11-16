import React, {Component} from 'react'

class ListItems extends Component {
  render () {
    return (
      <div>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default ListItems
