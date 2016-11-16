import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      hasSubmitted: false,
      tasks: {
        open: [
          {name: 'Cras', description: 'justo odio'},
          {name: 'Dapibus', description: 'ac facilisis in'},
          {name: 'Morbi', description: 'leo risus'},
          {name: 'Porta', description: 'ac consectetur ac'},
          {name: 'Vestibulum', description: 'at eros'},
        ],
        completed: [],
      },
    }
  }

  onNameInput(e) {
    this.setState({
      name: e.target.value,
    })
  }

  onDescriptionInput(e) {
    this.setState({
      description: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    let newOpenTasks = this.state.tasks.open.slice()
    newOpenTasks.push({name: this.state.name, description: this.state.description})
    let newTasks = {
      open: newOpenTasks,
      completed: this.state.tasks.completed.slice()
    }
    this.setState({
      hasSubmitted: true,
      tasks: newTasks,
    })
    console.log(this.state.tasks)
  }

  onTaskClick(e, i, state) {
    let newOpenTasks = this.state.tasks.open.slice()
    let newCompletedTasks = this.state.tasks.completed.slice()
    if (state === "complete") {
      console.log("Already complete!")
    } else if (state === "open") {
      newCompletedTasks.unshift(newOpenTasks[i])
      newOpenTasks.splice(i, 1)
      this.setState({
        tasks: {
          open: newOpenTasks,
          completed: newCompletedTasks,
        }
      })
    }
  }

  renderTask(item, i, state) {
    return (
      <button onClick={e => this.onTaskClick(e, i, state)}
        key={i}
        type="button"
        className="list-group-item"
        title="Click to Complete">
        <strong>{item.name}</strong> {item.description}
      </button>
    )
  }

  render() {

    let openTasks = this.state.tasks.open.map( (item, i) => {
      return this.renderTask(item, i, "open")
    })

    let completedTasks = this.state.tasks.completed.map( (item, i) => {
      return this.renderTask(item, i, "completed")
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
