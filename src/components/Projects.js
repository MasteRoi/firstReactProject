import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }

  render(){
    let projecItems;
    if (this.props.fruits) {
      projecItems = this.props.fruits.map(item => {
        return(
          <ProjectItem onDelete={this.deleteItem.bind(this)} key={item.id} fruit = {item} />
        );
      });
    }
    return(
      <div className="Projects">
      <h3>Latest Fruits</h3>
        {projecItems}
      </div>

    );
  }
}


export default Projects;
