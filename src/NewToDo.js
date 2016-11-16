import React, {Component} from 'react';

class NewToDo extends Component {
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
