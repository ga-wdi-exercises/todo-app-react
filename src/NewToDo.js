import React, {Component} from 'react';

class NewToDo extends Component {
  render() {
    return(
      <div>
        <form>
          Add To-do:
          <input type="text"  />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default NewToDo
