// Developer TODO: add App component
import React, { Component } from 'react';
import ListItems from "./Listitems"



class Todos extends Component {
  constructor(props) {
    super()
    this.state={
      body: props.body
    }
  }


  render(){
    let listItems = this.props.listItems.map( (item, index) => {
      return <ListItems body={item} key={index} />
    })

    return (
      <div>
      <h1>To Do List</h1>
      {listItems}
      </div>
    );

  }
}

export default Todos;
