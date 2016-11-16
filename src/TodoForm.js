import React, { Component } from 'react'

class TodoForm extends Component {
  render(){
    let { onNameInput, onDescriptionInput, onSubmit, name, description } = this.props
    return(
      <section className="jumbotron">
        <h1>Task Manager</h1>
        <form className="form-inline" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label className="sr-only" htmlFor="task_name">Task Name</label>
            <input type="text" className="form-control input-lg" id="task_name" placeholder="Task Name" onChange={e => onNameInput(e)} value={name} />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="task_desc">Task Description</label>
            <input type="text" className="form-control input-lg" id="task_desc" placeholder="Task Description" onChange={e => onDescriptionInput(e)} value={description} />
          </div>

          <button type="submit" className="btn btn-info btn-lg">Save</button>
        </form>
      </section>
    )
  }
}

export default TodoForm
