// bring in React and Component instance from react
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
// export default Hello
