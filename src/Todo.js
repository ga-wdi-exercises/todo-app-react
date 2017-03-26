import React, {Component} from 'react';
import seeds from './seeds.js';

class Todo extends Component {
  constructor(props){
    super()
    this.state = {
      todos: seeds,
    }
  }


  render() {
    // loops through all todos in the seed file and returns an output.
    // eslint-disable-next-line
    let undonetasks = this.state.todos.map((todo, index) => {
      if (todo.completion === false){
        return <div><li key={index}> <h3>{todo.title}</h3> <p>{todo.content}</p></li></div>
      }
    })
      // disables warning that an direct expected return
    // eslint-disable-next-line
    let donetasks = this.state.todos.map((todo, index) => {
      if(todo.completion === true){
        return <div><li key={index}> <h3>{todo.title}</h3> <p>{todo.content}</p></li></div>
      }
    })

    return (
      <div>
      <h1> To Do List </h1>
        <h2> Uncompleted Tasks </h2>
        <ul>
          {undonetasks}
         </ul>
         <h2> Completed Tasks </h2>
         <ul>
          {donetasks}
         </ul>
      </div>
    )
  }

}


export default Todo
