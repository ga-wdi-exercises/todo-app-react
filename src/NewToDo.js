import React, {Component} from 'react';

class NewToDo extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     newtodo: '',
  //     items: []
  //   }
  //
  // }
  //
  // handlenewtodo(e){
  //   this.setState({
  //     newtodo: e.target.value
  //   })
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault(e)
  //   console.log(this.state.newtodo)
  //
  //   // call this.setState and add the newTodo  to this.state.items
  // }

  render() {
    return(
      <div>
        <form onSubmit={e => this.props.onhandleSubmit(e)}>
          Add To-do:
          <input type="text" value={this.props.newtodo} onChange={e=>this.props.onhandlenewtodo(e)}  />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default NewToDo
