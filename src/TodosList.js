// Developer TODO: add App component
import _ from 'lodash'
import React, {Component} from 'react'
import TodosListHeader from './TodosListHeader'
import TodosListItem from './TodosListItem'

class TodosList extends Component {
  renderItems() {
    const props = _.omit(this.props, 'todos')

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
    } {...todo} {...props} />)
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}

export default TodosList
