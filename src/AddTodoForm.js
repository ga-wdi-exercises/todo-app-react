import React, { Component } from 'react'

class AddTodoForm extends Component {
render() {
     if(!this.props.addTodo){
       return(
         <button onClick={(event) => this.props.toggleNewTodo(event) }>Add Todo</button>
       )
     } else {
       return(
         <form onSubmit={(event) => this.props.addNewTodo(event)}>
           <input type="text" placeholder="Title" onChange={(event) => this.props.setNewTodoTitle(event)}/>
           <input type="text" placeholder="Details" onChange={(event) => this.props.setNewTodoText(event)}/>
           <button type="submit">Add Todo</button>
         </form>
       )
     }
   }
 }


 export default AddTodoForm
