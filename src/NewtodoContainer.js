import React, {Component} from 'react';
import NewToDo from './NewToDo.js'

class NewtodoContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      newtodo: '',
      items: ["hello"]
    }

  }

  handlenewtodo(e){
    this.setState({
      newtodo: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault(e)
    let todos = this.state.items.concat(this.state.newtodo)
    this.setState({
      items: todos
    })
  }
//
  render(){
    let todos = this.state.items.map((todo, i) => {
      return <li key={i}> {todo}</li>
    })
    return(
      <div>
        <NewToDo
          newtodo={this.state.newtodo}
          onhandleSubmit={e => this.handleSubmit(e)}
          onhandlenewtodo={e => this.handlenewtodo(e)}
          />
          <ul>{todos}</ul>

        </div>
    )
  }
}

export default NewtodoContainer;
