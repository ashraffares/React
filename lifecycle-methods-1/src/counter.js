import React from 'react'

export default class Counter extends React.Component {
    constructor(props) {
        console.log('Start Constructor')
        super(props);

        this.state = {
            counter: 0,
        }

        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
        this.reset = () => this.setState({counter: 0});
    }
    render() {
        console.log('Start Render');
        return (
           <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>

                <div className="counter">
                    Counter: {this.state.counter}
                </div>
           </div>
        )
    }
}