import React from 'react';
import Counter from './counter'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
    }
    this.mount = () => this.setState({mount: true});
    this.unmount = () => this.setState({mount: false});
  }
  render() {
    return (
      <div>
        <button onClick={this.mount} disabled={this.state.mount}>Mount</button>
        <button onClick={this.unmount} disabled={!this.state.mount}>Un Mount</button>
        { this.state.mount ? <Counter/> : null }
      </div>
    )
  }
}
