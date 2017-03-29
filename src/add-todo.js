import React, {Component} from 'react'

class AddTodo extends Component {

  handleAdd(e){
    e.preventDefault()
    this.props.addTask(this.refs.addInput.value)
    this.refs.addInput.value = ''
  }

  render(){
    return(
      <form onSubmit={this.handleAdd.bind(this)}>
        <input type="text" ref="addInput" placeholder="Add Todo Item"/>
        <button type="submit" className="btn btn-success"> Create</button>
      </form>
    )
  }
}


export default AddTodo
