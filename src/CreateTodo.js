import React, { Component } from 'react';

   class CreateTodo extends Component {
     render() {
       if(!this.props.addTodo){
         return(
           <button onClick={(evt) => this.props.toggleNewTodo(evt) }>Add</button>
         )
       } else {
         return(
           <form onSubmit={(evt) => this.props.addNewTodo(evt)}>
             <input type="text" placeholder="Title" onChange={(evt) => this.props.setNewTodoTitle(evt)}/>
             <input type="text" placeholder="Todo Details" onChange={(evt) => this.props.setNewTodoBody(evt)}/>
             <button type="submit">Add Todo</button>
           </form>
         )
       }
     }
   }


export default CreateTodo
