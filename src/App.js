import React, { Component } from 'react';
import './App.css';
import ToDoItems from './components/ToDoItems'
class App extends Component {
  constructor() {
    super();
    this.toDoItem = [
      { title: "Go to market", isComplete: true },
      { title: "Play fooball" },
      { title: "Go to buy snack" }
    ]
  }


  render() {
      return (  
        <div className="App">
          {
            this.toDoItem.length > 0 && this.toDoItem.map((item, index) => <ToDoItems key={index} title={item}></ToDoItems>)
          }
          {this.toDoItem.length === 0 && 'Nothing....'}
        </div>
      );
  }
}

export default App;
