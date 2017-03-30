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
    let todosArray = this.state.todos;
    let completeTodosArray = this.state.completeTodos;
    completeTodosArray.push(todosArray[index]);
    todosArray.splice(index, 1);
    this.setState({
      completeTodos: completeTodosArray,
      todos: todosArray
    });
  }
  editTodo(e, index){
    let newTodo = prompt("She changed her mind again, hasn't she.");
    let todoArray = this.state.todos;
    todoArray[index] = newTodo;
    this.setState({
      todos: todoArray
    });
  }
  deleteTodo(e, index){
    let todosArray = this.state.todos;
    todosArray.splice(index, 1);
    this.setState({
      todos: todosArray
    });
  }
  createTodo(e){
    let todosArray = this.state.todos;
    let newTodo = prompt("Honey, I need you todo one other thing...");
    todosArray.push(newTodo);
    this.setState({
      todos: todosArray
    })
  }
  render(){
    let todos = this.props.todos.map( (todo, index) => (
      <div>
        <p key={index}>{todo}<span> - </span>
        <button onClick={(e, key) => this.markComplete(e, index)}>Mark Chore Complete</button>
        <button onClick={(e, key) => this.editTodo(e, index)}>Edit Chore</button>
        <button onClick={(e, key) => this.deleteTodo(e, index)}>Delete Chore</button></p>
      </div>
    ))
    console.log(todos)
    let completeTodos = this.props.completeTodos.map( (completeTodo, index) => (
      <li key={index}>{completeTodo}</li>
    ))
    return(<div>
      <h2>{this.props.title}</h2>
      <h4>The Honey Do List</h4>
      {todos}
      <h4>Completed Work</h4>
      {completeTodos}<br />
      <button onClick={(e) => this.createTodo(e)}>Add a Chore</button>
    </div>)
  }
}

export default List
