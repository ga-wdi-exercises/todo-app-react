import React, {Component} from 'react'
var ToDoApp = React.createClass({
  getInitialState: function(){
    return {items: []};
  },
  updateItems: function(newItem){
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});

  },
  render: function(){
    return (
      <div>
        <ToDoBanner/>
        <TodoList item={this.state.items}/>
        <TodoForm onFormSubmit={this.updateItems}/>
      </div>
    );
  }
});
