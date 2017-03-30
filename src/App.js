import React, {Component} from 'react'
import Todos from './todos.js'
import Newtodo from './newtodo.js'
import Onetodo from './onetodo.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDo: [
        {name: "this is the first todo that I have"},
        {name: "this is the second todo that I have"},
        {name: "this is the third todo that I have"}
      ]
    }
    this.addToDo = this.addToDo.bind(this)
    this.updateToDo = this.updateToDo.bind(this)
  }
  addToDo(newtodo) {
    let toDos = this.state.toDo
    toDos.push(newtodo)
    this.setState({
      toDo: toDos
    })
  }
  updateToDo(oldtodo, updatedtodo) {
    let toDos = this.state.toDo
    toDos.splice((this.state.toDo.indexOf(oldtodo)),1)
    toDos.push(updatedtodo)
    this.setState({
      toDo: toDos
    })
  }
  render(){
    return(
      <Router>
        <div>
          <nav>
            <Link to='/todos'>Todos</Link>
            <Link to='/new'>New Todo</Link>
          </nav>
          <main>
            <Route path='/todos' render={()=><Todos todos={this.state.toDo}/>}/>
            <Route path='/new' render={() => <Newtodo addToDo={this.addToDo}/>}/>
            <Route path='/todo/:name' render={() => <Onetodo updateToDo={this.updateToDo}/>}/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
