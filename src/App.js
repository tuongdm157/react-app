import React, { Component } from 'react';
import './App.css';
import ToDoItems from './components/ToDoItems'
import TrafficLight from './componentsState/TrafficLight';
import Accordion from './componentChild/Accordion'
class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   toDoItem: [
    //     { title: "Go to market", isComplete: true },
    //     { title: "Play fooball", isComplete: true },
    //     { title: "Go to buy snack" }
    //   ]
    // }
  }

  // onItemClick(item) {
  //   return (event) => {
  //     const isComplete = item.isComplete;
  //     const { toDoItem } = this.state
  //     const index = toDoItem.indexOf(item);
  //     this.setState({
  //       toDoItem: [
  //         ...toDoItem.slice(0, index),
  //         { ...item, isComplete: !isComplete },
  //         ...toDoItem.slice(index + 1)
  //       ]
  //     })
  //   }
  // }


  render() {
    // const { toDoItem } = this.state
    return (
      <div className="App">
        <Accordion heading="Heading" >
          Demo ne
        </Accordion>
        {/* <TrafficLight/> */}
        {/* {
          toDoItem.length > 0 && toDoItem.map((item, index) => <ToDoItems
            key={index}
            item={item}
            onClick={this.onItemClick(item)}></ToDoItems>)
        }
        {toDoItem.length === 0 && 'Nothing....'} */}


      </div>
    );
  }
}

export default App;
