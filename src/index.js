import React, {Component} from 'react';
import ReactDOM from "react-dom"

//Edit Button Component
class EditButton extends Component{
  render(){
    return(<button>Edit</button>);
  }
}

//Delete Button Component
class DeleteButton extends Component{
  render(){
    return(<button>Delete</button>);
  }
}

//New Item Component
class NewItem extends Component{
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

//TodoList Component
class TodoList extends Component{
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
    <ol>
      {this.props.items.map((item, index) => {return <li key={index}>{item}</li>
    })}
    </ol>
    </div>
  }
}


let items = ["Work on lab", "Finish Lab", "Eat Dinner", "Binge Watch L&O SVU"];
ReactDOM.render(<TodoList items={items}/>, document.getElementById('root'))
