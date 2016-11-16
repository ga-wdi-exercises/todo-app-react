import React, { Component } from 'react'
import ListContainer from './ListContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContainer
          data={NoteData}/>
      </div>
    )
  }
}

export default App
