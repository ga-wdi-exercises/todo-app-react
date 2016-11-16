// Developer TODO: add App component
import React, { Component } from 'react';




class ToDo extends Component {

  render(){

    return(

    <div>
    <h1> React To Do</h1>
      <Task body={this.props.body}  />
    </div>

  )}
}




class Task extends Component {
    constructor(props) {
      super(props)
      this.state = {
        body: props.body
      }
    }
      handleTaskInput(e) {
          this.setState({
            query: e.target.value
          })
      }

      submitQuery(e){
        e.preventDefault();
      {this.state.body}
      }
  render () {


    return (
      <div>
        <h3>Task List</h3>
        <form onSubmit={(e) => this.submitQuery(e)}>
        <input
          onChange={(e) => this.handleTaskInput(e)}
          value={this.state.newItem}
          type="text"
          placeholder="To Do" />
          <button type="submit">Add Task</button>
          </form>
          <div>
          {this.props.body}
      </div>
      </div>


    )
  }
}


export default ToDo;
