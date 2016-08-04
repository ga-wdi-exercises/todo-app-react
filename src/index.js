import React from 'react';
import ReactDOM from "react-dom"

class NewItem extends React.Component{
  constructor(props){
    super()
    this.state = props
  }
  render(){
    return <form onSubmit={ e => this.create(e) }>
    <input
      type="text"
      placeholder="Enter todo"
      value={this.state.newItem}
      onChange={e => this.change(e)}
    />
    </form>
  }
  change(e){
    this.setState({
      newItem: (e.target.value)
    })
  }
  create(e){
    e.preventDefault()
    this.props.onCreate(this.state.newItem)
    this.setState({newItem: ''})
  }
}

class List extends React.Component{
  constructor(props){
    super()
    this.state = props
  }
  addItem(text){
    let items = this.state.items
    items.push(text)
    this.setState({items})
    console.log(text)
  }
  render(){
    return <div>
    <NewItem newItem='' onCreate={ text => this.addItem(text) }/>
    <ul>
      {this.props.items.map((item, index) => {return <li key={index}>{item}</li>
    })}
    </ul>
    </div>
  }
}


let items = ["1. Finish lab","2. Go home", "3. Eat a burger"];
ReactDOM.render(<List items={items}/>, document.getElementById('root'))
