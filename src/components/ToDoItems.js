import React, {Component} from 'react';
import './ToDoItems.css';
class ToDoItems extends Component {
    render(){
        let className = 'ToDoItems';
        if(this.props.title.isComplete){
            className +=' ToDoItems-complete';
        }
        return (
            <div className={className}>
                <p>{this.props.title.title}</p>
            </div>
        )
    }
}

export default ToDoItems;