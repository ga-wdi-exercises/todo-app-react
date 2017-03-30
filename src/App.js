// Developer TODO: add App component

import React, {Component} from 'react';
import List from './List'

class App extends Component {
  render() {
    return (
      <div>
        <h2> Stuff todo </h2>
        <List />
      </div>
    )
  }
}

export default App;
