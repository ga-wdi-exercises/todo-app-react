import React, {Component} from 'react'
import Item from './Item.js'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: props.body
    }
  }
  handleClick(e) {
    this.setState({
      body: prompt("What do you want to update?")
    })
  }
  render() {
    let items = this.props.items.map((item, i) => {
      return <Item body={item} key={i} />
    })
      return (
        <div>
        <h1>To Do list</h1>
        <button onClick={(e) => this.handleClick(e)}>Update</button>
        {items}
        </div>
      )
    }
}

export default ToDo
