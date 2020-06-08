import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {
         mount: true
        };
        this.mountCounter = () => this.setState({mount: true})
        this.unMountCounter = () => this.setState({mount: false})
      }

    render() {
        return <div className = "App">
            <button onClick = {this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
            <button onClick = {this.unMountCounter} disabled={!this.state.mount}>unMount Counter</button>
           {this.state.mount? <Counter/>: null}
        </div>
    }
}

export default App;
