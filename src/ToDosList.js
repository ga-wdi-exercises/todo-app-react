import React, {Component} from 'react';


class ToDosList extends Component{
  renderItems() {
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index}
    {...todo} />);

  }


  constructor(props){
    super(props)
    this.state = {
      query: '',
  }
}
  handleSearchInput(e) {
   this.setState({
      query: e.target.value
    })
 }

  submitQuery(e){
    e.preventDefault();
    console.log(this.state.query);
  }


  render(){
    return (
      <div>
      <h2>To Do List</h2>
      <form onSubmit={(e) => this.submitQuery(e)}>
      <input
        onChange={(e) => this.handleSearchInput(e)}
        value={this.state.query}
        type="text"
        placeholder="To Do" />
        <button type="submit">Add To Do</button>
        </form>
      </div>
    );
  }
}



export default ToDosList
