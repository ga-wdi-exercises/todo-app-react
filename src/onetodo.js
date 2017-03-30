import React, {Component} from 'react'

class Onetodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDo: this.props.location.state.toDo,
      newToDo: null
    }
  }
  handleUpdate(e) {
    this.setState = {
      newToDo: e.target.value
    }
  }
  render() {
    return(
      <div>
        <h1>{this.state.toDo.name}</h1>
        <form>
          <input type="text" onChange={(e) => this.handleUpdate(e)} />
          <input type="button" onClick={() => this.props.updateToDo(this.state.toDo, this.state.newToDo)} />
        </form>
      </div>
    )
  }
}

export default Onetodo
