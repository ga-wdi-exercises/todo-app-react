                            // <!-- // ###########################################
                            // // 201703292130L   EL MIERCOLES   JAY -->

import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
                  stillTodos:     props.stillTodos,       //--> total list of tasks to do
                  completedTodos: props.completedTodos    // --> tasks that have been completed
                };
  }
                          // GIRO: IF WE CREATED A METHOD TO COPY A TODO, THEN IT MIGHT LOOK LIKE THIS,
                          // NATs APPROACH
                          // todosCopy() {
                          //   return this.state.todos.map(todo => Object.assign({}, todo))
  /* Handle the button click event to mark the task indicated by the index to complete. */
  markItComplete(e, index){
                            let stillTodosArray =     this.state.stillTodos;
                            let completedTodosArray = this.state.completedTodos;
                            completedTodosArray.push(stillTodosArray[index]);
                            stillTodosArray.splice(index, 1);
                            this.setState({
                                            stillTodos: stillTodosArray,
                                            completedTodos: completedTodosArray
                                          });
                          }
  /* Handle the button click event to mark the task indicated by the index to be incomplete. */
  markItIncomplete(e, index){
                              let stillTodosArray =     this.state.stillTodos;
                              let completedTodosArray = this.state.completedTodos;
                              stillTodosArray.push(completedTodosArray[index]);
                              completedTodosArray.splice(index, 1);
                              this.setState({
                                              stillTodos: stillTodosArray,
                                              completedTodos: completedTodosArray
                                            });
                            }
  /* Respond to the prompt by providing an updated task description. */
  editExistingTodo(e, index){
                            let newTodo = prompt("Update your task here.");
                            let stillTodosArray =     this.state.stillTodos;
                                stillTodosArray[index] = newTodo;
                            this.setState({
                                            stillTodos: stillTodosArray
                                          });
                            }
  /* Respond to the event by removing the "to do" task indicated by the index. */
  deleteTodo(e, index){
                          let stillTodosArray = this.state.stillTodos;
                          stillTodosArray.splice(index, 1);
                          this.setState({
                                          stillTodos: stillTodosArray
                                        });
                        }
  /* Create a new "to do" task and add it to the end of the list. */
  createTodo(e){
                          let stillTodosArray = this.state.stillTodos;
                          let newTodo = prompt("What new task do you need to add to your list?");
                          stillTodosArray.push(newTodo);
                          this.setState({
                                        stillTodos: stillTodosArray
                                      });
                        }
  render(){
      let stillTodos = this.props.stillTodos.map( (                                 stillTodo, index) => (
                                                          <div>
                                                            <p key={index}>   {stillTodo}          <span> - </span>
                                                            <button onClick={(e, key) => this.editExistingTodo(e, index)}>  Edit Todo</button>
                                                            <button onClick={(e, key) => this.markItComplete(e, index)}>    Mark Complete</button>
                                                            <button onClick={(e, key) => this.deleteTodo(e, index)}>        Delete Todo</button></p>
                                                          </div>
                                                        ))
      let completedTodos = this.props.completedTodos.map( (                    completedTodo, index) => (
                                                          <div>
                                                            <p key={index}>   {completedTodo}     <span> - </span>
                                                            <button onClick={(e, key) => this.markItIncomplete(e, index)}>  Mark Incomplete </button></p>
                                                          </div>
                                                        ))
    return(
      <div>
        <h2>{this.props.title}</h2>
        <h4>Todos</h4>
                                  {stillTodos}
        <h4>Completed Tasks</h4>
                                  {completedTodos}<br />
        <button onClick={(e) => this.createTodo(e)}>  Create Todo </button>
      </div>)
  }
}

export default TodoList
