import React, { Component} from 'react';

class Todo extends Component {
  render(){
    return(
      <p>{this.props.todos}</p>
    )
  }
}

export default Todo;
