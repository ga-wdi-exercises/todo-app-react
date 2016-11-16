// Developer TODO: add App component
import React, { Component } from 'react'
import NewTodo from './NewTodo'

class Todo extends Component {
 render(){
   return <div>
     <NewTodo newTodo='' onCreate={ text => this.addTodo(text) }/>
     <ul>
       {this.state.todos.map( (todo, index) => {
         console.log("inside map", todo, index)
         return <Todo delete={ i => this.delete(i) } index={index} isEditing={false} key={index} todo={todo}/>
       })}
     </ul>
   </div>
 }
}

export default Todo
