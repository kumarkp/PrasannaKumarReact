import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {
         count : 0
        };
        this.incrementCount = () => this.setState({count: this.state.count + 1});
        this.decrementCount = () => this.setState({count: this.state.count - 1});
      }

    componentDidMount() {
        console.log('Comp Did Mount');
        console.log('--------------');
    } 

    render() {
        console.log('Render');
        return <div className = "counter">
            <h1>This is my webpack counter app</h1>
            <div id="counter-value">{this.state.count}</div>
            <button id="increment-btn" onClick={this.incrementCount}>Increment</button>
            <button id="decrement-btn" onClick={this.decrementCount}>Decrement</button>
        </div>
    }

    componentDidUpdate() {
        console.log('Comp Did Update');
        console.log('--------------');
    } 
}

export default Counter;
