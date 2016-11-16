import React, {Component} from 'react';
import NewToDo from './NewToDo.js'

class NewtodoContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      newtodo: '',
      items: []
    }

  }

  handlenewtodo(e){
    this.setState({
      newtodo: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault(e)
    console.log(this.state.newtodo)

    // call this.setState and add the newTodo  to this.state.items
  }
//
  render(){
    return(
      <NewToDo
        newtodo={this.state.newtodo}
        onhandleSubmit={e => this.handleSubmit(e)}
        onhandlenewtodo={e => this.handlenewtodo(e)}
        />


    )
  }
}

export default NewtodoContainer;
