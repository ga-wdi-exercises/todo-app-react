import React, {Component} from 'react'

class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos: [
        'Todo 1',
        'Todo 2',
      ],
      newTodo:'',
      editTodo:'',
    }
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.newTodo);
    console.log(this.state.todos);
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ''
    })
  }
  handleInput(e){
    this.setState({
      newTodo: e.target.value
    })
  }

  handleEdit(e, i){
    console.log("log");
    this.setState({
      editTodo: e.target.value
    })
  }
  handleUpdate(e, i){
    e.preventDefault()
    let tempTodo = this.state.todos
    tempTodo[i]  = this.state.editTodo
    console.log(tempTodo[i]);
    this.setState({
      todos: tempTodo
    })
  }
  render(){
    let todos = this.state.todos.map((todo, i) => {
      return <div key={i}>{todo}
        <form onSubmit={(e) => this.handleUpdate(e, i)}>
          <input onChange={(e) => this.handleEdit(e)} />
          <button>Edit</button>
          </form>
        </div>
    })
    return(
      <div>
        <h2>Todos</h2>
        {todos}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input onChange={(e) => this.handleInput(e)} value={this.state.newTodo} placeholder="new todo" />
          <button>New Todo</button>
        </form>
        <h2>Done</h2>
      </div>
    )
  }
}


export default Todo
