import React, { Component } from 'react';

 class Todo extends Component {
   render() {
     let items = this.props.items.map( (item, index) => {
     return <li key={index}>{item}</li>;
     })
     return (
       <div>
         <h1>My Todos</h1>
           <div>
             <ul> <li> {items} </li> </ul>
           </div>
       </div>
     )
   }
 }

 export default Todo;
