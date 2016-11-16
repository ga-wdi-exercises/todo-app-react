import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    let { openTasks, completedTasks } = this.props
    return(
      <div>
        <section className="row">
          <article className="col-md-6">
            <h3>Open Items</h3>
            <div className="list-group">
              {openTasks}
            </div>
          </article>

          <article className="col-md-6">
            <h3>Completed Items</h3>
            <div className="list-group">
              {completedTasks}
            </div>
          </article>
        </section>
      </div>
    )
  }
}

export default TodoList
