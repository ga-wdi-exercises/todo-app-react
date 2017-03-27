
// Developer TODO: add App component
import React, {Component} from 'react'

let hideForm = {
  display: 'inline'
}

class Todo extends Component {

  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.state = {
      todos: [],
      title: "Todo App",
      index: 0

    }
  }

  addTodo(e){
    e.preventDefault()
    let name = this.refs.name.value
    let completed = this.refs.completed.value
    let index = this.state.index

    let todo = {
      name,
      completed,
      index
    }
    index +=1
    let todos = this.state.todos
    todos.push(todo)

    this.setState({
      todos: todos,
      index: index
    })

    this.refs.todoForm.reset

  }

  deleteTodo(index){
    let todos = this.state.todos
    let todo = todos.find(function(todo){
      return todo.index === index
    })
    todos.splice(todo, 1)

    this.setState({
      todos: todos
    })
  }

  editTodo(index){

    // console.log("editTodo");
    let todos = this.state.todos
    let todo = todos.find(function(todo){
      return todo.index === index
    })
    // change hideForm to display inline

    // let name = this.refs.newName.value
    let name = this.refs.name.value
    let updatedTodo = {
      ...todo,
      name
    }
    console.log(updatedTodo);


  }

  updateTodo(index){
    event.preventDefault()

  }


render(){
  let title = this.state.title
  let todos = this.state.todos

  return(
    <div>
      <h2> {title} </h2>
      <form ref="todoForm">
      <input type="text" ref="name" placeholder="Todo"/>
      <input type="text" ref="completed" placeholder="Completed"/>
      <button onClick={this.addTodo}>Add New Todo</button>
      </form>
      <ul>
        {todos.map((todo =>
          <li key={todo.index}>{todo.name}
            <button onClick={ _ => this.deleteTodo(todo.index) }>Delete</button>
            <button onClick={ _ => this.editTodo(todo.index) }>Edit</button>
          </li>))}
      </ul>

      <form style={hideForm}>
        <input type="text" name="editTodo" ref="newName" />
        <button onClick={ _ => this.updateTodo(todo.index) }>Update</button>
      </form>

      </div>
  )
}

// <button onClick={this.deleteTodo.bind(null, todo.index)}>Delete</button>
// <button onClick={this.editTodo.bind(null, todo.index)}>Edit</button>

}





export default Todo
