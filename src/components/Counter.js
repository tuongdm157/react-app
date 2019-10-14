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

    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            });
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="Counter">
                {this.props.render(this.state.count)}
                {/* <button onClick={this.decrease}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increase}>+</button> */}
            </div>
        );
    }
}

export default Counter;
