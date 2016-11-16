import React, {Component} from 'react'

class Todo extends Component {
  constructor(props){
    super()
    this.state = {
      todos: [{body:"buy cheeseburgers", clicked: false},
              {body:"get soda", clicked: false}],
      newTodo: ""
    }
    this.handleBox = this.handleBox.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleBox(event){
    this.setState({
      newTodo: event.target.value
    })
  }

  addTodo = function(e){
    e.preventDefault()

    let newTodo = [{body: this.state.newTodo, clicked:false}]
    let newArray = this.state.todos.concat(newTodo);

    this.setState({
      todos: newArray,
    })
  }

  handleEdit(event){
    this.setState({
      editValue: event.target.value
    })
  }

  editTag(e, stuff){
    e.preventDefault()
    console.log(stuff)
    let editee = this.state.todos[stuff]
    console.log(editee.body)
    editee.body = this.state.editValue
    console.log(editee.body)
    this.setState()

  }

  render (){
    let todos = this.state.todos.map((todo, index) => {
        return<li
                key={index}
                onClick={(e, stuff)=>this.editTag(e,index)}
                >

                  <form>
                    {todo.body}
                    <input type="submit" onClick ={(e) => this.editTag(e)} value = "Edit"/>
                    <input type="text" value = {this.state.editValue} onChange = {this.handleEdit}/>
                  </form>
              </li>
    })


    return(
      <div>
        <h1>To Do</h1>
        <p>Instructions to Edit: Fill in the blank next to the field youd like to edit. Then click the list dot to commit the change.
          But seriously, dont press the list button when the field is blank, or it will wipe your data. The actual Edit button does nothing.</p>
            <ul>
              {todos}
            </ul>

      <form onSubmit ={(e) => this.addTodo(e)}>
        <input type = "text" placeholder = "New Todo" value ={this.state.newTodo} onChange = {this.handleBox}></input>
        <input type ="submit"/>
      </form>
      </div>
    )
  }
}

export default Todo
