import React, { Component } from 'react'
import '../tutorial.css';

export default class Square extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        }
    }

    onClickSquare = () =>{
        this.setState({
            value : 'X'
        })
    }

    render() {
        return (
            <button 
                className="square" 
                onClick={this.props.onClick}>
            {this.props.value}
            </button>
        )
    }
}
