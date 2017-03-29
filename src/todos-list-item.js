import React, {Component} from 'react'

class TodosListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isEditing: false
    }
  }

    onEditClick() {
        this.setState({
          isEditing: true
        })
    }

    onCancelClick() {
        this.setState({
          isEditing: false
        })
    }

    onSaveClick(e) {
        e.preventDefault()

        const oldTask = this.props.task
        const newTask = this.refs.editInput.value
        this.props.saveTask(oldTask, newTask)

        this.setState({
          isEditing: false
        })
    }

    showTaskSection() {
        const { task} = this.props;

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            )
        }
}

    showActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button type="button" className="btn btn-primary" onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button type="button" className="btn btn-warning" onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button type="button" className="btn btn-info" onClick={this.onEditClick.bind(this)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        )
    }

    render() {
        return (
            <tr>
                {this.props.task}
                {this.showTaskSection()}
                {this.showActionsSection()}
            </tr>
        )
    }

  }

export default TodosListItem
