// Developer TODO: add App component
import React, {Component} from 'react'

class ToDoItems extends Component{

  constructor (props){
    super()
    this.state={
      // array: [],
      // index: 0
    }
  }

  handleDelete(e, index) {
          e.preventDefault();
          let deletedTodos = this.props.entries.slice();
          deletedTodos.splice(index.index, 1);
          this.setState({array:deletedTodos});
      }






  render(){

    function createTasks(todo, index) {
      return(
      <li key={todo.key}>
      <input type="checkbox"/>
      {todo.body}
      <button onClick={(e) => this.handleDelete(e, {index}).bind(this)}>Delete</button>
      </li>
    )}



    let listItems = this.props.entries.map(createTasks, this);
    return (
      <ul className="list1">
      {listItems}
      </ul>
    );
  }
};


class List extends Component{

  constructor (props){
    super()
    this.state={
      todos: [],
      body: ''
    }
  }

  handleChange(e){
    this.setState({body: e.target.value});
  }

  addTodo(e) {
    e.preventDefault();
    let todosArray = this.state.todos

    todosArray.push(
      {
        body: this.state.body,
        isDone: false,
        key: Date.now()
      }
    );
    this.setState({
      todos: todosArray,
      body: ''

    });
  }


  render () {
    return (
      <div className="main">
      <h2>{this.props.title}</h2>
      <form className="ToDoForm" onSubmit={this.addTodo.bind(this)}>
      <input
      type="text"
      onChange={this.handleChange.bind(this)}
      placeholder="Add a task"
      value={this.state.body}
      />
      <input type="submit" value="Post" />
      </form>
      <ToDoItems entries={this.state.todos}/>

      </div>
    )
  }
}


export default List
