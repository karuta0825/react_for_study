import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Square from '../components/Square'
import fillSquare from '../actions/fillSquare'

// 関数が多くならば、純粋関数コンポーネントよりも、
// クラスコンポーネントのほうが見やすい

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

const status = (squares, xIsNext) => {
  const winner = calculateWinner(squares);
  if (winner) {
    return 'Winner: ' + winner;
  } else {
    return 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
}

const BoardBox = ({ squares, xIsNext, onSquareClick }) => {

  return (
    <div>
      <div className="status">{ status(squares, xIsNext) }</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => onSquareClick(0, calculateWinner(squares))} />
        <Square value={squares[1]} onClick={() => onSquareClick(1, calculateWinner(squares))} />
        <Square value={squares[2]} onClick={() => onSquareClick(2, calculateWinner(squares))} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => onSquareClick(3, calculateWinner(squares))} />
        <Square value={squares[4]} onClick={() => onSquareClick(4, calculateWinner(squares))} />
        <Square value={squares[5]} onClick={() => onSquareClick(5, calculateWinner(squares))} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => onSquareClick(6, calculateWinner(squares))} />
        <Square value={squares[7]} onClick={() => onSquareClick(7, calculateWinner(squares))} />
        <Square value={squares[8]} onClick={() => onSquareClick(8, calculateWinner(squares))} />
      </div>
    </div>
  );

};

BoardBox.propTypes = {
  squares: PropTypes.array.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  onSquareClick: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    squares: state.squares,
    xIsNext: state.xIsNext
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSquareClick: (id, winner) => {
      dispatch( fillSquare(id, winner ) )
    }
  }
}

const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardBox)


export default Board