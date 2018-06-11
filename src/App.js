import React, { Component } from 'react';
import Projects from './components/Projects.js';
import AddProject from './components/AddProject.js';
import Todos from './components/Todos.js';
import uuid from 'uuid';
import './App.css';



class App extends Component {
  constructor(){
    super();

    this.state = {
      fruits: [],
      todos: []
    }
  }

  getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.setState({
        todos: json
      }))
  }

  getFruits(){
    this.setState({
      fruits: [
          {
              id: uuid.v4(),
              fruit: "Apple",
              size: "Large",
              color: "Red"
          },
          {
              id: uuid.v4(),
              fruit: "Banana",
              size: "Medium",
              color: "Yellow"
          },
          {
              id: uuid.v4(),
              fruit: "Avoccado",
              size: "Small",
              color: "Green"
          }
      ]});
  }

  componentWillMount(){
      this.getFruits();
      this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(fruit){
    let fruits = this.state.fruits;
    fruits.push(fruit);
    this.setState({fruits: fruits})
  }

  handleDeleteProject(id){
    let fruits = this.state.fruits;
    let index = fruits.findIndex(x => x.id === id);
    fruits.splice(index, 1);
    this.setState({fruits: fruits})
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects fruits={this.state.fruits} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />

      </div>
    );
  }
}

export default App;
