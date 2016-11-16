import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: '',
      taskDescription: '',
      hasSubmitted: false,
      tasks: [],
    }
  }

  onNameInput(e) {
    console.log('name')
  }

  onDescriptionInput(e) {
    console.log('task')
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('click!')
  }

  render() {
    return(
      <div className="container">
        <section className="jumbotron">
          <h1>Task Manager</h1>
          <form className="form-inline" onSubmit={e => this.onSubmit(e)}>
            <div className="form-group">
              <label className="sr-only" htmlFor="task_name">Task Name</label>
              <input type="text" className="form-control input-lg" id="task_name" placeholder="Task Name" onChange={e => this.onNameInput(e)} />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="task_desc">Task Description</label>
              <input type="text" className="form-control input-lg" id="task_desc" placeholder="Task Description" onChange={e => this.onDescriptionInput(e)} />
            </div>

            <button type="submit" className="btn btn-info btn-lg">Save</button>
          </form>
        </section>

        <section className="row">
          <article className="col-md-6">
            <h3>Open Items</h3>
            <div className="list-group">
              <button type="button" className="list-group-item" title="Click to Complete"><strong>Cras</strong> justo odio</button>
              <button type="button" className="list-group-item" title="Click to Complete"><strong>Dapibus</strong> ac facilisis in</button>
              <button type="button" className="list-group-item" title="Click to Complete"><strong>Morbi</strong> leo risus</button>
              <button type="button" className="list-group-item" title="Click to Complete"><strong>Porta</strong> ac consectetur ac</button>
              <button type="button" className="list-group-item" title="Click to Complete"><strong>Vestibulum</strong> at eros</button>
            </div>
          </article>

          <article className="col-md-6">
            <h3>Completed Items</h3>
            <div className="list-group">
              <button type="button" className="list-group-item" title="Click to Reopen"><strong>Cras</strong> justo odio<a className="pull-right" title="Click to Delete"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a></button>
              <button type="button" className="list-group-item" title="Click to Reopen"><strong>Dapibus</strong> ac facilisis in<a className="pull-right" title="Click to Delete"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a></button>
              <button type="button" className="list-group-item" title="Click to Reopen"><strong>Morbi</strong> leo risus<a className="pull-right" title="Click to Delete"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a></button>
              <button type="button" className="list-group-item" title="Click to Reopen"><strong>Porta</strong> ac consectetur ac<a className="pull-right" title="Click to Delete"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a></button>
              <button type="button" className="list-group-item" title="Click to Reopen"><strong>Vestibulum</strong> at eros<a className="pull-right" title="Click to Delete"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a></button>
            </div>
          </article>
        </section>

      </div>
    )
  }
}

export default Todo
