import React, {Component} from 'react';
import seed from './Data';
import Tasks from './Tasks';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: seed
    }
  }
  render() {
    return(
      <div>
        <h2> List of task </h2>
        <Tasks todos={this.state.todos} />
      </div>
    );
  }
}

export default List;
