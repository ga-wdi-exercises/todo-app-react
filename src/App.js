// Developer TODO: add App component
import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: props.todos,
      completeTodos: props.completeTodos
    };
  }
  markComplete(e, index){
    let completeTodosArray = this.state.completeTodos.push(this.state.todos[index]);
    let todosArray = this.state.todos.slice(index, 1).concat(this.state.todos.slice(index+1));
    this.setState({
      completeTodos: completeTodosArray,
      todos: todosArray
    });
  }
  markIncomplete(e, index){
    let todosArray = this.state.todos.push(this.state.completeTodos[index]);
    let completeTodosArray = this.state.completeTodos.slice(index, 1).concat(this.state.completeTodos.slice(index+1));
    this.setState({
      completeTodos: completeTodosArray,
      todos: todosArray
    });
  }
  editTodo(e, index){
    let newTodo = prompt("What is the new Todo?");
    let todoArray = this.state.todos;
    todoArray[index] = newTodo;
    this.setState({
      todos: todoArray
    });
  }
  deleteTodo(e, index){
    let todosArray = this.state.todos.slice(index, 1).concat(this.state.todos.slice(index+1));
    this.setState({
      todos: todosArray
    });
  }
  createTodo(e){
    let newTodo = prompt("What do you need to do?");
    let todosArray = this.state.todos.push(newTodo);
    this.setState({
      todos: todosArray
    });
  }
  render(){
    let todos = this.props.todos.map( (todo, index) => (
      <div>
        <p key={index}>{todo}<span> - </span>
        <button onClick={(e, key) => this.markComplete(e, index)}>Mark Complete</button>
        <button onClick={(e, key) => this.editTodo(e, index)}>Edit Todo</button>
        <button onClick={(e, key) => this.deleteTodo(e, index)}>Delete Todo</button></p>
      </div>
    ))
    let completeTodos = this.props.completeTodos.map( (completeTodo, index) => (
      <div>
        <p key={index}>{completeTodo}<span> - </span>
        <button onClick={(e, key) => this.markIncomplete(e, index)}>Mark Incomplete</button></p>
      </div>
    ))
    return(<div>
      <h2>{this.props.title}</h2>
      <h4>Todos</h4>
      {todos}
      <h4>Completed Tasks</h4>
      {completeTodos}<br />
      <button onClick={(e) => this.createTodo(e)}>Create Todo</button>
    </div>)
  }
}

export default List
