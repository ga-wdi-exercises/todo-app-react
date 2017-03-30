import React, { Component } from 'react';

   class CreateTodo extends Component {
     render() {
       if(!this.props.addTodo){
         return(
           <button onClick={(evt) => this.props.toggleNewTodo(evt) } className="btn btn-info btn-lg">Add</button>
         )
       } else {
         return(
           <form onSubmit={(evt) => this.props.addNewTodo(evt)}>
             <input type="text" className="form-control input-lg" placeholder="Title" onChange={(evt) => this.props.setNewTodoTitle(evt)}/>
             <input type="text" className="form-control input-lg"placeholder="Todo Details" onChange={(evt) => this.props.setNewTodoBody(evt)}/>
             <button type="submit" className="btn btn-info btn-lg">Add Todo</button>
           </form>
         )
       }
     }
   }


export default CreateTodo
