import React from 'react';
import styles from './Square.module.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
    render() {
      return (
        <button className={styles.square} 
        onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
  }

export default Square;