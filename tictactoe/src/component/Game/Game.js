import React from 'react';
import Board from '../Board/'
import styles from './Game.module.css';

class Game extends React.Component {
    render() {
      return (
        <div className={styles.game}>
          <div className={styles.game_board}>
            <Board />
          </div>
          <div className={styles.game_info}>
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;