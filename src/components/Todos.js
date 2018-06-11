import React, { Component } from 'react';
import TodoItem from './ProjectItem';


class Todos extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }

  render(){
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return(
          <TodoItem onDelete={this.deleteItem.bind(this)} key={todo.id} todo = {todo} />
        );
      });
    }
    return(
      <div className="Todos">
      <h3>Todo List</h3>
        {todoItems}
      </div>

    );
  }
}


export default Todos;
