import React from "react";
import Square from "../Square/Square";
import styles from "./Board.module.css";


const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      XIsNext: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.XIsNext?  'X' : 'O';
    this.setState({
      squares: squares,
      XIsNext: !this.state.XIsNext,
    });
  }

  renderSquare(i) {
    return(<Square 
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}
    />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${(this.state.XIsNext? 'X' : 'O')}`;
    }
  

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
