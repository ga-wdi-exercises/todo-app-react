import React, {Component} from 'react';
import NewToDo from './NewToDo.js'

class NewtodoContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      newtodo: '',
      items: ["hello"]
    }

  }

  handlenewtodo(e){
    this.setState({
      newtodo: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault(e)
    let todos = this.state.items.concat(this.state.newtodo)
    this.setState({
      items: todos
    })
  }
  editToDo(e, i){
    let newTodo = prompt("What is the new to-do?")
    console.log(this.state.items[i])
    let currentArray = this.state.items
    currentArray[i] =  newTodo
    this.setState({
      items: currentArray
    })

  }
//
  render(){
    let todos = this.state.items.map((todo, i) => {
      return <li key={i}> {todo} <button onClick = {(e) => this.editToDo(e, i)}>Edit</button></li>
    })
    return(
      <div>
        <NewToDo
          newtodo={this.state.newtodo}
          onhandleSubmit={e => this.handleSubmit(e)}
          onhandlenewtodo={e => this.handlenewtodo(e)}
          />
          <ul>{todos}</ul>

        </div>
    )
  }
}

export default NewtodoContainer;
