import React, {Component} from 'react';
import seeds from './seeds.js';

class Todo extends Component {
  constructor(props){
    super()
    this.state = {
      todos: seeds,
      newTask: '',
      newTitle: '',
      newContent: ''
      // completion: this.props.completion
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


  render() {


// for showing tasks
    // loops through all todos in the seed file and returns an output.
    // eslint-disable-next-line
    let undonetasks = this.state.todos.map((todo, index) => {
      if (todo.completion === false){
        return <div><li key={index}> <h4>{todo.title}</h4> <p>{todo.content}</p></li></div>
      }
    })
      // disables warning that an direct expected return
    // eslint-disable-next-line
    let donetasks = this.state.todos.map((todo, index) => {
      if(todo.completion === true){
        return <div><li key={index}> <h4>{todo.title}</h4> <p>{todo.content}</p></li></div>
      }
    })

    return (
      <div>
      <h1> To Do List </h1>
        <h2> Need To Complete </h2>
        <ul>
          {undonetasks}
         </ul>
         <h2> Completed Tasks </h2>
         <ul>
          {donetasks}
         </ul>
         <h3> Create a New Task </h3>
         <form onSubmit={(event) => this.addTask(event)}>
          <input type='text' placeholder="New Task Title" onChange={(event) => {this.handleNewTaskTitle(event)}}></input>
          <input type='text' placeholder="New Task Specifics" onChange={(event) => {this.handleNewTaskContent(event)}}></input>
          <input type='submit'></input>
         </form>
      </div>
    )
  }

}


export default Todo
