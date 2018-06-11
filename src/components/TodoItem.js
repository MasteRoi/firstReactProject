import React, { Component } from 'react';


class TodoItem extends Component {
  deleteItem(id){
    //console.log(id);
    this.props.onDelete(id);
  }

  render(){

    return(
      <li className="Todo">
        <strong>{this.props.todo.title}</strong> <button onClick={this.deleteItem.bind(this, this.props.fruit.id)}>X</button>
      </li>

    );
  }
}

export default TodoItem;
