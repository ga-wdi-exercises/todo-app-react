import React, { Component } from 'react';

class TodoList extends Component {

  render(){

    // for showing tasks
        // loops through all todos in the seed file and returns an output.
        // eslint-disable-next-line
        let undonetasks = this.props.tasks.map((todo, index) => {
          if (todo.completion === false){
            return (
              <li key={index}>
                <h4>{todo.title}</h4>
                  <p>{todo.content}</p>
                  <p>
                    <input type="checkbox" onClick={(e) => {this.props.onComplete(e, index)}}></input>
                    Mark Complete
                  </p>
                  <p> Edit </p>
                  <input value={todo.title} onChange={(e) => {this.props.handleEditTaskTitle(e, index)}} />
                  <input value={todo.content} onChange={(e) => {this.props.handleEditTaskContent(e, index)}} />
                  <button onClick={(e) => {this.props.onDeleteTask(e, index)}}> Delete </button>

              </li>
            )
          }
        })
          // disables warning that an direct expected return
        // eslint-disable-next-line
        let donetasks = this.props.tasks.map((todo, index) => {
          if(todo.completion === true){
            return (
              <li key={index}>
                <h4>{todo.title}</h4>
                  <p>{todo.content}</p>
                  <p>
                    <input type="checkbox" onClick={(e) => {this.props.changeToIncomplete(e, index)}}></input>
                    Mark Incomplete
                  </p>
                  <p> Edit </p>
                  <input value={todo.title} onChange={(e) => {this.props.handleEditTaskTitle(e, index)}} />
                  <input value={todo.content} onChange={(e) => {this.props.handleEditTaskContent(e, index)}} />
                  <button onClick={(e) => {this.props.onDeleteTask(e, index)}}> Delete </button>
             </li>

           )
          }
        })

    return(
      <div>
          <h2> Incomplete Tasks </h2>
          <ul>
            {undonetasks}
           </ul>
           <h2> Completed Tasks </h2>
           <ul>
            {donetasks}
          </ul>
          <h3> Create a New Task </h3>
          <form onSubmit={(event) => {this.props.onCreateSubmit(event)}}>
           <input type='text' placeholder="New Task Title" value={this.props.newTitle} onChange={(event) => {this.props.setNewTaskTitle(event)}}></input>
           <input type='text' placeholder="New Task Specifics" value={this.props.newContent}  onChange={(event) => {this.props.setNewTaskContent(event)}}></input>
           <input type='submit'></input>
          </form>
      </div>
    )
  }

}

export default TodoList
