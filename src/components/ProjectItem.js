import React, { Component } from 'react';


class ProjectItem extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }

  render(){

    return(
      <li className="Project">
        <strong>{this.props.fruit.fruit}</strong> : {this.props.fruit.size} - {this.props.fruit.color} <button onClick={this.deleteItem.bind(this, this.props.fruit.id)}>X</button>
      </li>

    );
  }
}

export default ProjectItem;
