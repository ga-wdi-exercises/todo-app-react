import React, {Component} from 'react'

var TodoList = React.createClass({
 render: function() {
   var createItem = function(itemText) {
     return (
       <TodoListItem>{itemText}</TodoListItem>
     );
   };
   return <ul>{this.props.items.map(createItem)}</ul>;
 }
});
