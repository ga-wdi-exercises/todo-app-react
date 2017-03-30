import React, { Component } from 'react'

class TodosListItem extends Component {
  constructor(props){
    super(props)

    this.state={
      isEditing: false
    }
  }
  onEditClick(){
    this.setState({
      isEditing: true
    })
  }
  onCancelClick(){
    this.setState({
      isEditing: false
    })
  }
  onSaveClick(e){
    e.preventDefault()

    const oldTask = this.props.task
    const newTask = this.refs.editInput.value
    this.props.saveTask(oldTask, newTask)
    this.setState({
      isEditing: false
    })
  }

  showTaskSection(){
    const {task} = this.props;

    if(this.state.isEditing){
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      )
    }
  }

  renderActionsSection(){
    if(this.state.isEditing){
      return(
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onEditClick.bind(this)}>Cancel</button>
        </td>
      )
    }
    return(
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    )
  }
render(){
  return(
          <tr>
            <td>
              {this.props.task}
            </td>
            <td>
              {this.showTaskSection()}
            </td>
            <td>
              {this.renderActionsSection()}
            </td>
          </tr>
      )
    }
  }


export default TodosListItem
