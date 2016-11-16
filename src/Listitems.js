import React, {Component} from 'react'

class ListItems extends Component {
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    index: props.index
    }


  render () {
     console.log(this.props)
    return (
      <div>
        <p>{this.props.body}
          <button onClick={(e) => this.props.onhandleClick(e,this.props.index)}> Delete {this.props.index} To do </button>
          <button onClick={(e) => this.props.onhandleClickEdit(e,this.props.index)}>Edit {this.props.index} To do </button>
          <button onClick={(e) => this.props.onhandleClickComplete(e,this.props.index)}> Complete{this.props.index} To do </button>

          </p>
      </div>
    )
  }
}

export default ListItems
