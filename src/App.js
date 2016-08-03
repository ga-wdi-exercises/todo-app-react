// Developer TODO: add App component
import React, {Component} from 'react'
import Item from './Item.js'

class Todo extends Component {
  handleChange(event) {
    this.setState({value: event.target.value});
    }
  render(){
    let items = this.props.items.map((item, index) => (
      <Item body={item} key={index} />
    ))
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>Items</h2>
        {items}
        <form>
        <input
          type="text"
          placeholder="Add a new todo"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Post"/>
        </form>

      </div>
    );
  }
}

export default Todo;
