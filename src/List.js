import React, {Component} from 'react';
import seed from './Data';
import Tasks from './Tasks';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: seed,
      newTodo: ''
    }
  }

  handleNewTask(evt){
    this.setState({
      newTodo: evt.target.value
    })
  }

  addTask(evt){
    evt.preventDefault()
    let newTodo = {task: this.state.task, done: false  }
    let newSeed = this.state.todos.slice()
      newSeed.push(newTodo)
    this.setState({
      todos: newSeed,
      newTodo: ''
    })
  }
  render() {
    return(
      <div>
        <h2> List of task </h2>
        <Tasks todos={this.state.todos} />
        <h4> Create New Task </h4>
         <form onSubmit={(evt) => this.addTask(evt)}>
          <input type='text' placeholder="New Task" onChange={(evt) => {this.handleNewTask(evt)}}></input>
          <input type='submit'></input>
         </form>
      </div>
    );
  }
}

export default List;
