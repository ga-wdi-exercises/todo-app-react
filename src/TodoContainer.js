import React, { Component } from 'react';
import TodoList from './TodoList.js';

class TodoContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTitle: '',
      newContent: '',
      completion: false,
      tasks: [
            {title:  "Feed the Dog", content: "Feed the dog at 8PM. Two cans of dog food", completion: true},
            {title: "Pick up Brother from the airport.", content: "Pick up brother at 9PM this Friday", completion: false},
            {title: "Clean the Kitchen", content: "Sweep and mop floors.", completion: false}
          ]
    }
  }


  setNewTaskTitle(e){
    this.setState({
      newTitle: e.target.value
    })
  }

  setNewTaskContent(e){
    this.setState({
      newContent: e.target.value
    })
  }

  handleCreateSubmit(e){
    e.preventDefault();
    let newTask = {title: this.state.newTitle, content: this.state.newContent, completion: false}
    let newSeeds = this.state.tasks.slice()
      newSeeds.push(newTask)
    this.setState({
      tasks: newSeeds,
      newTitle: '',
      newContent: '',
      completion: false
    })
  }

  render(){

    return(
      <div>
      <h1> To Do List </h1>
        <TodoList
          tasks={this.state.tasks}
          setNewTaskTitle={(e) => { this.setNewTaskTitle(e) }}
          setNewTaskContent={(e) => { this.setNewTaskContent(e) }}
          onCreateSubmit={(e) => { this.handleCreateSubmit(e) }}
        />
      </div>
    )
  }

}

export default TodoContainer
