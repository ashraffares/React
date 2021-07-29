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

    shouldComponentUpdate(nextProps, nexState) {
        if (nextProps.ignoreProp &&
            this.props.ignoreProp !== nextProps.ignoreProp) {
                console.log('Start shouldComponentUpdate - DO NOT RENDER.');
                return false
            }
            console.log('Start shouldComponentUpdate - RENDER.');
            return true
    }

    // the render method is trigerd each time change happen to the component.
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
    // this lifeCycle method start after kick of after render method and it called once when the component first created.
    componentDidMount() {
        console.log('Start ComponentDidMount');
        console.log('________________________');
    }

    // this lifeCycle method start each time there is update in the component
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('start ComponentDidUpdate ');
        console.log('_________________________');
    }

    // this lifeCycle method start when the component will be taking out of the DOM.
    componentWillUnmount() {
        console.log('start componentWillUnmount');
        console.log('__________________________');
    }
}