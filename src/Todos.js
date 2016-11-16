// Developer TODO: add App component
import React, { Component } from 'react';
import ListItems from "./Listitems"



class Todos extends Component {
  constructor(props) {
    super()
    this.state={
      toDoItems: props.listItems,
      body: props.body,
      newTodo: ""
    }
  }

  handleChangeTodo(event) {
    this.setState({newTodo: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.toDoItems.push(this.state.newTodo)
    this.setState({toDoItems: this.state.toDoItems})
    console.log(this.state)
    console.log("New Todo =", this.state.newTodo);
  }

  render(){



    let listItems = this.props.listItems.map( (item, index) => {
      return <ListItems body={item} key={index} />
    })

    return (
      <div>
      <h1>To Do List</h1>
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <input type="text"  placeholder="New Todo Entry" value={this.state.newTodo} onChange={ (e) => this.handleChangeTodo(e)} />
      <input type="submit" value="Add Todo" />
      </form>
      {listItems}
      </div>
    );

  }
}

export default Todos;
