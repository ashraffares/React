import React from 'react';
import Counter from './counter'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    }
    this.mount = () => this.setState({mount: true});
    this.unmount = () => this.setState({mount: false});
    this.ignoreProp = () => this.setState({ignoreProp: Math.random()});
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
  }
  render() {
    return (
      <div>
        <button onClick={this.mount} disabled={this.state.mount}>Mount</button>
        <button onClick={this.unmount} disabled={!this.state.mount}>Un Mount</button>
        <button onClick={this.ignoreProp} >ignore Prop</button>
        <button onClick={this.seedGenerator} >seed Generator</button>
        { this.state.mount ? <Counter ignoreProp={this.state.ignoreProp} seed = {this.state.seed}/> : null }
      </div>
    )
  }
}
