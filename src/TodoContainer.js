import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { queryDb } from './Utils'

class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      tasks: {
        open: [],
        completed: [],
      },
    }
  }

  componentWillMount(){
    let newOpenTasks = this.state.tasks.open.slice()
    let newCompletedTasks = this.state.tasks.completed.slice()

    queryDb('get').then(data => {
      data.forEach( i => {
        newOpenTasks.push(i)
      })
      this.setState({
        tasks: {
          open: newOpenTasks,
          completed: newCompletedTasks,
        }
      })
    })
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

    let newTask = {
      name: this.state.name,
      description: this.state.description,
      isComplete: false,
    }

    queryDb('post', newTask).then( (res) => {
      let newOpenTasks = this.state.tasks.open.slice()
      newOpenTasks.push(newTask)

      let newTasks = {
        open: newOpenTasks,
        completed: this.state.tasks.completed.slice()
      }
      this.setState({
        tasks: newTasks,
      })
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
        <TodoList
          openTasks={openTasks}
          completedTasks={completedTasks}
        />
      </div>
    )
  }
}

export default TodoContainer
