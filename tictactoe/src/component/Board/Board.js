import React from "react";
import Square from "../Square/Square";
import styles from "./Board.module.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const Newsquares = this.state.squares.slice();
    Newsquares[i] = 'X'
    this.setState({squares: Newsquares});
  }

  renderSquare(i) {
    return(<Square 
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}
    />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.board_row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.board_row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.board_row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
