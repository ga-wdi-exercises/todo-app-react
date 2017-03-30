import React, {Component} from 'react';
import seed_data from './Data';
import Options from './Options';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: seed_data
    }
  }
  render() {
    return(
      <div>
        <h2> List of Stuff </h2>
        <Options todos={this.state.todos} />
      </div>
    );
  }
}

export default List;
