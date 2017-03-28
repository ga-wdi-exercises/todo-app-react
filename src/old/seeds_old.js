

import React, { Component } from 'react';

class Seeds extends Component {
  let seeds = [
    {title:  "Feed the Dog", content: "Feed the dog at 8PM. Two cans of dog food", completion: true},
    {title: "Pick up Brother from the airport.", content: "Pick up brother at 9PM this Friday", completion: false},
    {title: "Clean the Kitchen", content: "Sweep and mop floors.", completion: false}
  ]
  constructor(props){
    super(props)
    this.state = {
      newTask: '',
      newTitle: '',
      newContent: '',
      completion: false,
      title: '',
      content: ''
    }
  }

  // for creating a new Todo
    handleNewTaskTitle(event){
      this.setState({
        newTitle: event.target.value
      })
    }
    handleNewTaskContent(event){
      this.setState({
        newContent: event.target.value
      })
    }

    addTask(event){
      event.preventDefault()
      let newTask = {title: this.state.newTitle, content: this.state.newContent, completion: false}
      let newSeeds = this.state.todos.slice()
        newSeeds.push(newTask)
      this.setState({
        todos: newSeeds,
        newTitle: '',
        newContent: ''
      })
    }

  // edit task

    handleEditTaskTitle(event, index){
      this.setState(
        this.state.todos[index].title, _ => React.addons.update({title: {$set: event.target.value}})
      )
    }

    handleEditTaskContent(event, index){
      this.setState(
        this.state.todos[index].content, _ => React.addons.update({content: {$set: event.target.value}})
      )
    }

    editTask(event,index){
      event.preventDefault()
      console.log(this.state.todos[index])
      this.setState(this.state.todos[index], {title: {$set: this.state.title}, content: {$set: this.state.content}})
    }

  // edit completion
  // handleCompletion(event){
  //
  // }


  render(){
    return (
      <div>
      {seeds}
      </div>
    )
  }

}

export default Seeds
