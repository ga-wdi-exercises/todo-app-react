import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: '',
      taskDescription: '',
      hasSubmitted: false,
      tasks: [
        {taskName: 'Cras', taskDescription: 'justo odio', isComplete: false},
        {taskName: 'Dapibus', taskDescription: 'ac facilisis in', isComplete: false},
        {taskName: 'Morbi', taskDescription: 'leo risus', isComplete: false},
        {taskName: 'Porta', taskDescription: 'ac consectetur ac', isComplete: false},
        {taskName: 'Vestibulum', taskDescription: 'at eros', isComplete: false},
      ],
    }
  }

  onNameInput(e) {
    console.log(e.target.value)
    this.setState({
      taskName: e.target.value,
    })
  }

  onDescriptionInput(e) {
    console.log(e.target.value)
    this.setState({
      taskDescription: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    let newTasks = this.state.tasks.slice()
    newTasks.push({taskName: this.state.taskName, taskDescription: this.state.taskDescription, isComplete: false})
    console.log({newTasks})
    this.setState({
      hasSubmitted: true,
      tasks: newTasks,
    })
    console.log(this.state.tasks)
  }

  render() {
    var openTasks = []
    var completedTasks = []
    this.state.tasks.map( (task, i) => {
      if (task.isComplete) {
        completedTasks.push(<button key={i} type="button" className="list-group-item" title="Click to Complete"><strong>{task.taskName}</strong> {task.taskDescription}</button>)
      } else {
        openTasks.push(<button key={i} type="button" className="list-group-item" title="Click to Complete"><strong>{task.taskName}</strong> {task.taskDescription}</button>)
      }
    })

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

export default Todo
