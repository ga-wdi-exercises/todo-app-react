import React, {Component} from 'react';


class ToDosList extends Component{

  render() {
    return (
      <div>
      <h2>To Do List</h2>
      <form>
        <input type="text" placeholder="To Do" />
        <button type="submit">Add To Do</button>
        </form>
      </div>
    );
  }
}

export default ToDosList
