import React, { Component } from 'react';
import TodoList from './TodoList.js';

class TodoContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTitle: '',
      newContent: '',
      tasks: [
            {title:  "Feed the Dog", content: "Feed the dog at 8PM. Two cans of dog food", completion: true},
            {title: "Pick up Brother from the airport.", content: "Pick up brother at 9PM this Friday", completion: false},
            {title: "Clean the Kitchen", content: "Sweep and mop floors.", completion: false}
          ]
    }
  }

// create a new task functions
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

// delete task functions
  deleteTask(e, index){
    let array = this.state.tasks
      array.splice(index, 1)
    this.setState({
      tasks: array
    })
  }

  // change completion status
  changeToComplete(e, index){
    e.preventDefault()
    let array = this.state.tasks
    array[index].completion = true
    this.setState({
      tasks: array
    })
  }

  changeToIncomplete(e, index){
    e.preventDefault()
    let array = this.state.tasks
    array[index].completion = false
    this.setState({
      tasks: array
    })
  }
// edit task functionality
  editTaskTitle(e, index){
    let array = this.state.tasks
    array[index].title = e.target.value
    this.setState({
      tasks: array
    })
  }

  editTaskContent(e, index){
    let array = this.state.tasks
    array[index].content = e.target.value
    this.setState({
      tasks: array
    })
  }


  render(){

    return(
      <div>
      <h1> To Do List </h1>
        <TodoList
          tasks={this.state.tasks}
          newTitle={this.state.newTitle}
          newContent={this.state.newContent}
          setNewTaskTitle={(e) => { this.setNewTaskTitle(e) }}
          setNewTaskContent={(e) => { this.setNewTaskContent(e) }}
          onCreateSubmit={(e) => { this.handleCreateSubmit(e) }}
          onDeleteTask={(e, index) => { this.deleteTask(e, index) }}
          onComplete={(e, index) => { this.changeToComplete(e, index) }}
          changeToIncomplete={(e, index) => { this.changeToIncomplete(e, index) }}
          handleEditTaskTitle={(e, index) => { this.editTaskTitle(e, index) }}
          handleEditTaskContent={(e, index) => { this.editTaskContent(e, index) }}
        />
      </div>
    )
  }

}

export default TodoContainer
