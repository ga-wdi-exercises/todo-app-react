// Developer TODO: add App component
import React, { Component } from 'react';
import ListItems from "./Listitems"



class Todos extends Component {
  constructor(props) {
    super()
    this.state={
      toDoItems: props.listItems,
      body: props.body,
      newTodo: "",
      editMode: false,
      editVal: "",
      editId:-1
    }
  }


  handleClickEdit(event, index){
    console.log("Click EDIT Event ==> for Index value ",index)
    console.log(this.state.toDoItems)
    let newArray=this.state.toDoItems
    let editTodo=newArray[index]
    this.setState({editId: index, editVal: editTodo, editMode: true} )
  }

  handleChangeTodoEdit(event) {
    this.setState({editVal: event.target.value});
  }

  handleChangeTodo(event) {
    this.setState({newTodo: event.target.value});
  }

  handleClick(event, index){
    let newArray=this.state.toDoItems
    newArray.splice(index,1)
    this.setState({  toDoItems: newArray
    })
  }



  handleClickComplete(event, index){
    console.log("Click Complete Event ==> for Index value ",index)
    console.log(this.state.toDoItems)
    let newArray=this.state.toDoItems
    this.setState({  toDoItems: newArray

    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.toDoItems.push(this.state.newTodo)
    this.setState({toDoItems: this.state.toDoItems})
    console.log(this.state)
    console.log("New Todo =", this.state.newTodo);
  }

  handleSubmitEdit(event) {
    event.preventDefault();
    let newArray=this.state.toDoItems
    newArray[this.state.editId]=this.state.editVal
    this.setState({toDoItems: newArray,editId: -1,editVal:"", editMode: false })
  }


  render(){


    if (this.state.editMode ) {
     return (
      <div>
      <h1>EDIT TODO</h1>
      <form onSubmit={(e) => this.handleSubmitEdit(e)}>
      <input type="text"  placeholder="Todo Entry" value={this.state.editVal} onChange={ (e) => this.handleChangeTodoEdit(e)} />
      <input type="submit" value="EDIT Todo" />
      </form>
      </div>
    )}
    else {
      let listItems = this.state.toDoItems.map( (item, index) => {
        return <ListItems body={item} index={index} key={index}
        onhandleClick={ (e,index) => this.handleClick(e,index)}
        onhandleClickEdit={ (e,index) => this.handleClickEdit(e,index)}
        onhandleClickComplete={ (e,index) => this.handleClickComplete(e,index)}
        />
      })
      return (
        <div>
        <h1>To Do List</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text"  placeholder="New Todo Entry" value={this.state.newTodo} onChange={ (e) => this.handleChangeTodo(e)} />
        <input type="submit" value="Add Todo" />
        </form>
        {listItems}

        </div>
      );

    }
  }
}

export default Todos;
