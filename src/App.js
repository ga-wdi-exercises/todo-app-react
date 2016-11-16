// Developer TODO: add App component

import React, {Component} from 'react'
import NewtodoContainer from './NewtodoContainer.js'


class App extends Component {
  render() {

    // let todos = this.props.todos.map((todo, i) => {
    //   return <Todo body={todo} key={i} />
    // })
    return (
      <div>
        <h1> To-Do List </h1>
        <NewtodoContainer />
      </div>
    )
  }
}

export default App;
