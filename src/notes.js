// Hard code the todos, have an array for incomplete todos.
//  i need to loop through all the incompleted and only list the names?
// push new todos into the array
//
// get todo by id and push them into an empty array called completed
//
// how do i edit a todos content?
//
// pop the todo .
let todos = this.props.incompleted.map((todo, i) => {
  return <li key={i}><input id="checkbox" type="checkbox"/>{todo.name}<button onClick={e => this.props.editSubmit(e)} id={i}>Edit</button></li>
})
