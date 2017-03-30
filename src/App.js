import React, {Component} from 'react'

import List from './Todo'

let Data = [
  {item: "Make tea", status: false},
  {item: "Attend class at GA", status: false},
]

class App extends Component {
  render() {
    return (
      <div>
        <h2> Todo List</h2>
        <List />
      </div>
    )
  }
}

export default App;
