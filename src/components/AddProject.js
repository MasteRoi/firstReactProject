import React, { Component } from 'react';
//import ProjectItem from './ProjectItem';
import uuid from 'uuid';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Large', 'Medium', 'Small']
  }

  handelSubmit(e){
    if (this.refs.fruit.value === ''){
      alert('Fruit title is required!');
    } else {
      if (this.refs.color.value === ''){
        alert('Color is required!');
      } else {
        this.setState({
          newProject: {
            id: uuid.v4(),
            fruit: capitalizeFirstLetter(this.refs.fruit.value),
            size: this.refs.size.value,
            color: capitalizeFirstLetter(this.refs.color.value)
          }}, function(){
            //console.log(this.state);
            this.props.addProject(this.state.newProject);
          }
        );
      }
    }
    e.preventDefault();
  }

  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return(
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handelSubmit.bind(this)}>
          <div>
            <label>Fruit</label><br />
            <input type="text" ref="fruit" />
          </div>
          <div>
            <label>Color</label><br />
            <input type="text" ref="color" />
          </div>
          <div>
            <label>Size</label><br />
            <select ref="size">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>

    );
  }
}

export default AddProject;
