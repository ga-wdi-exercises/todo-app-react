import React, { Component } from 'react'

class TodosListItem extends Component {
  constructor(props){
    super(props)

    this.state={
      isEditing: false
    }
  }

  renderActionsSection(){
    if(this.state.isEditing){
      return(
        <td>
          <button>Save</button>
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
        <thead>
          <tr>
            <td>{this.props.task }</td>
            <td>
              {this.renderActionsSection()}
            </td>
          </tr>
        </thead>
      )
    }
    onEditClick(){
      this.setState({ isEditing: true})
    }
    onCancelClick(){
      this.setState({isEditing: false })
    }
  }


export default TodosListItem
