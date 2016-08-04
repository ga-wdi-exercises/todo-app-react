import React, {Component} from "react"
import ReactDOM from "react-dom"
// import toDo from "./App.js"

class NewItem extends Component {
  constructor(props){
    super(props)
    this.state = props
  }

  render(){
    return (
    <h1>
    <form onSubmit={e => this.create(e) }>
      <input type='text' placeholder="new to-do" value={this.state.newItem} onChange = { e => this.change(e)}/>
    </form>
    </h1>
    )
  }
  change(e) {
    this.setState({
      newItem: e.target.value
    })
  }
  create(e){
    e.preventDefault()
    this.props.onCreate(this.state.newItem)
    console.log(this.state.newItem)
    this.setState({newItem: ''})
  }

}

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = props
  }

  addItem(text){
    //same as items = this.state.items
    let {items} = this.state
    items.push(text)
    this.setState({items})
  }

  render(){
    return (<div>
    <NewItem newItem='' onCreate={ text => this.addItem(text)}/>

    <ul>
    {this.props.items.map( (item, index) => {
      return <Item key={index} item={item}  />
    })}
    </ul>
    </div>)
  }
}

class Item extends Component {
  constructor(props){
    super()
    this.state = props
  }
  render(){
    return (
      (<li onClick={e => this.edit(e)} key={this.props.index}> {this.props.item} </li>)
    )
  }
  edit(e){
    console.log(this.state.item)
    this.setState({

    })
  }
}

// .map's properies allow item then index?



let items = [
  "learn react",
  "learn angular"
]

ReactDOM.render(
  <List items={items}/>,
  document.getElementById('root')
)

// export default List
