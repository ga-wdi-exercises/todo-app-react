// Developer TODO: add App component
import React, { Component } from 'react'
import Item from './items.js'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        items: ["Dirty", "Naughty"],
        newTodo: '',
      }
  }

  handleSubmit(e){
    e.preventDefault()
    let oldItems = this.state.items.concat([this.state.newTodo])
    this.setState({
      items: oldItems
    })
  }

  handleChange(e){
    this.setState({
      newTodo: e.target.value
      //.target saves the value
    })
  }

  handleEdit(e, i){
    console.log("Harambe");
    console.log(this.state.items[i]);
    this.setState({
      //items = updated array
    });
  }

  render() {
    let items = this.state.items.map((item, i) => {
      return(
        <div>
          <Item body={item} key={i} /><button onClick={e => this.handleEdit(e, i)}>Edit</button>
        </div>
      )
    })
    return (
      <div>
        <h1>To Do List</h1>
        {items}
        <form onSubmit={e => this.handleSubmit(e)}>
          New To Do:
            <input type="text" placeholder="New To Do..." value={this.state.newTodo} onChange={e => this.handleChange(e)}/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App
