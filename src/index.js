import React from 'react'
import ReactDOM from 'react-dom'

class NewItem extends React.Component {
  constructor(props){
    super()
    this.state = props
  }
  render(){
    return <form onSubmit={ e => this.create(e) }>
      <input type='text' value={this.state.newItem} onChange={ e => this.change(e) } />
    </form>
  }
  change(e){
    this.setState({
      newItem: e.target.value
    })
  }
  create(e){
    e.preventDefault()
    // add this below to existing array
    this.props.onCreate(this.state.newItem)
    this.setState({newItem: ''})
  }
}

class List extends React.Component {
  constructor(props){
    super()
    this.state = props
  }
  addItem(text){
    let items = this.state.items
    items.push(text)
    this.setState({items})
  }
  delete(index){
    let items = this.state.items
    items.splice(index, 1)
    this.setState({items})
    console.log(this.state)
  }
  render(){
    return <div>
      <NewItem newItem='' onCreate={ text => this.addItem(text) }/>
      <ul>
        {this.state.items.map( (item, index) => {
          console.log("inside map", item, index)
          return <Item delete={ i => this.delete(i) } index={index} isEditing={false} key={index} item={item}/>
        })}
      </ul>
    </div>
  }
}

class Item extends React.Component{
  constructor(props){
    super()
    this.state = props
  }
  toggleEdit(e){
    let isEditing = !this.state.isEditing
    this.setState({
      item: this.state.item,
      isEditing: isEditing
    })
  }
  componentDidUpdate(){
    let found = ReactDOM.findDOMNode(this.refs.edit)
    if(found) found.focus();
  }
  isTyping(e){
    console.log(e)
    this.setState({
      item: e.target.value,
      isEditing: true
    })
  }
  render(){
    if( this.state.isEditing ){
      return <li>
        <input
          onBlur={e => this.toggleEdit(e)}
          onChange={e => this.isTyping(e) }
          ref="edit"
          value={this.state.item} /></li>
    } else {
      return <li>
         <span onClick={e=>this.toggleEdit(e)}>{this.state.item}</span>&nbsp;
         <span onClick={e => this.props.delete(this.state.index) }>&times;</span>
      </li>
    }
  }
}

let items = [
  "learn react",
  "learn comp sci"
]
ReactDOM.render(
  <List items={items}/>,
  document.getElementById('root')
)
