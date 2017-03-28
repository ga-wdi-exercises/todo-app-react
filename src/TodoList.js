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
                    <input type="checkbox"></input>
                    Mark Complete
                  </p>
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
                    <input type="checkbox"></input>
                    Mark Incomplete
                  </p>
             </li>

           )
          }
        })

    return(
      <div>
          <h2> Need To Complete </h2>
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

export default TodoList
