import React, {Component} from 'react'


var TodoApp = React.createClass({
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
        <TodoBanner/>
        <TodoList items={this.state.items}/>
        <TodoForm onFormSubmit={this.updateItems}/>
        </div>
    );
  }
});


// // Developer TODO: add App component
// // bring in React and Component instance from react
//
// // define our Hello component
// class Hello extends Component {
//   // what should the component render
//   render () {
//     // Make sure to return some UI
//     return (
//       <h1>Hello World!</h1>
//     )
//   }
// }
//
export default Hello
