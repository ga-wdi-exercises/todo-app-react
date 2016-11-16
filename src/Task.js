import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
      super(props)
      this.state = {
        query: ' '
      }
    }
      handleTaskInput(e) {
          this.setState({
            query: e.target.value
          })
      }

      submitQuery(e){
        e.preventDefault();
        console.log(this.state.query);
      }
  render () {
    return (
      <div>
        <h3>Task List</h3>
        <form onSubmit={(e) => this.submitQuery(e)}>
        <input
          onChange={(e) => this.handleTaskInput(e)}
          value={this.state.query}
          type ="text"
          placeholder="To Do" />
          <button type="submit">Add Task</button>
          </form>
      </div>
    )
  }
}

export default Task;
