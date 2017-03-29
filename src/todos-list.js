import React, {Component} from 'react'
import _ from 'lodash'
import TodosListItem from './todos-list-item'


class TodosList extends Component {

  renderItems(){
    const props = _.omit(this.props, 'todos')

    return _.map(this.props.todos, (todo,index) => <TodosListItem key={index
    }{...todo} {...props}/>)

  }
  render(){
    return(
      <div>
      <br/><br/>
      <table>
        <tbody>

          <th>Task</th>
          <th>Action</th>
          {this.renderItems()}
        </tbody>
      </table>
      </div>
    )
  }
}


export default TodosList
