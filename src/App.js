import React, {Component} from 'react';
//loads in Task component
import Task from './Task.js';


class Todo extends Component {

  render() {
    // pulls and run through all the tasks listed in the index.js file
    let tasks = this.props.tasks.map((task, index) => (
      <Task body={task} key={index}/>
    ))

    return (
      <div>
      <h1> To Do List </h1>
        <h3> List for: {this.props.author} </h3>
        <h2> Tasks </h2>
        <p> {tasks} </p>
      </div>
    )
  }

}


export default Todo
