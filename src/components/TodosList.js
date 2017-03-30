import _ from 'lodash';
import React, { Component } from 'react'
import TodosListHeader from './TodosListHeader'
import TodosListItem from './TodosListItem'

class TodosList  extends Component {
  renderItems(){
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo}/>)
  }
render(){
  console.log(this.props.todos)
  return(
      <table>
        <TodosListHeader />
          <tr>
            {this.renderItems()}
          </tr>
      </table>
    )
  }
}


export default TodosList
