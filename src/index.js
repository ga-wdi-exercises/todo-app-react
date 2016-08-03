import React, {Component} from "react"
import ReactDOM from "react-dom"
import toDo from "./App.js"

class NewItem extends React.Component {
  constructor(props){
    super()
    this.state = props
  }

  render(){
    return (<form onSubmit={e => this.create(e) }>
      <input type='text' value={this.state.newItem} onChange = { e => e.target.value}/>
    </form>)
  }
  change(e) {
    this.setState({
      newItem: e.target.value
    })
  }
  create(e){
    e.preventDefault()
    this.props.onCreate(this.state.newItem)
    this.setState({newItem: ''})
    console.log(this.state.newItem)
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
    <form>
      <input type="text" value ='' onChange={ e => this.change(e)} />
    </form>
    <ul>
    {this.props.items.map( (item, index) => {
      return <li key={index}>{item}</li>
    })}
    </ul>
    </div>)
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

export default List
