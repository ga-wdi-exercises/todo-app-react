import React, {Component} from 'react'

class Newtodo extends Component {
  handleUpdate(e) {
    e.preventDefault()
    let newToDo = {
      name: e.target.previousSibling.value
    }
    this.props.addToDo(newToDo)
  }
  render() {
    return(
      <div>
        <form>
          <input type="text"/>
          <input type="button" onClick={(e) => this.handleUpdate(e)}/>
        </form>
      </div>
    )
  }
}

export default Newtodo
