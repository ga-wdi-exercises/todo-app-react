import React, {Component} from 'react';
import Seeds from './seeds.js';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: Seeds,
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

  render() {


// for showing tasks
    // loops through all todos in the seed file and returns an output.
    // eslint-disable-next-line
    let undonetasks = this.state.todos.map((todo, index) => {
      if (todo.completion === false){
        return ( <li key={index}> <h4>{todo.title}</h4> <p>{todo.content}</p> <p><input type="checkbox" onChange={(event) => {this.handleCompletion(event)}}></input>Complete</p></li>)
      }
    })
      // disables warning that an direct expected return
    // eslint-disable-next-line
    let donetasks = this.state.todos.map((todo, index) => {
      if(todo.completion === true){
        return (

          <li key={index}>
            <h4>{todo.title}</h4>
              <p>{todo.content}</p>
            <h4> Edit </h4>
              <form onSubmit={(event) => this.editTask(event, index)}>
                <input type='text' value={this.state.todos[index].title} onChange={(event) => {this.handleEditTaskTitle(event, index)}}></input>
                <input type='text' value={this.state.todos[index].content} onChange={(event) => {this.handleEditTaskContent(event, index)}}></input>
                <button type='submit'>Submit</button>
              </form>
         </li>

       )
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
          <input type='text' value={this.state.newTitle} placeholder="New Task Title" onChange={(event) => {this.handleNewTaskTitle(event)}}></input>
          <input type='text' value={this.state.newContent} placeholder="New Task Specifics" onChange={(event) => {this.handleNewTaskContent(event)}}></input>
          <input type='submit'></input>
         </form>
      </div>
    )
  }

}


export default Todo
