import React, { Component } from 'react';
import './ToDoItems.css';
import className from 'classnames';
class ToDoItems extends Component {
    constructor(props){
        super(props);
        // this.onItemClick = this.onItemClick.bind(this);
    }

    // onItemClick = () => {
    //     this.props.title.isComplete = !this.props.title.isComplete;
    // }


    render() {
        let className = 'ToDoItems';
        if (this.props.item.isComplete) {
            className += ' ToDoItems-complete';
        }
        return (
            <div onClick={this.props.onClick} className={className}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

export default ToDoItems;