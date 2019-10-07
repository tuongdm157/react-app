import React, { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div className="Counter">
                <button onClick={this.decrease}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

export default Counter;
