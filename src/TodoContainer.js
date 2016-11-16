import React, { Component } from 'react'
import TodoForm from './TodoForm'

class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
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
      tasks: newTasks,
    })
  }

  onTaskClick(e, i, state) {

    let newOpenTasks = this.state.tasks.open.slice()
    let newCompletedTasks = this.state.tasks.completed.slice()

    if (state === "completed") {
      newOpenTasks.unshift(newCompletedTasks[i])
      newCompletedTasks.splice(i, 1)
    } else if (state === "open") {
      newCompletedTasks.unshift(newOpenTasks[i])
      newOpenTasks.splice(i, 1)
    }

    this.setState({
      tasks: {
        open: newOpenTasks,
        completed: newCompletedTasks,
      }
    })
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
        <TodoForm
          onNameInput={e => this.onNameInput(e)}
          onDescriptionInput={e => this.onDescriptionInput(e)}
          onSubmit={e => this.onSubmit(e)}
          name={this.state.name}
          desciption={this.state.description}
        />

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

export default TodoContainer
