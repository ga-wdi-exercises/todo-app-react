import React, {Component} from 'react'

class Item extends Component {
  render(){
    return (
      <div>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default Item;
