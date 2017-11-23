import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Square from '../components/Square'
import fillSquare from '../actions/fillSquare'

// 関数が多くならば、純粋関数コンポーネントよりも、
// クラスコンポーネントのほうが見やすい
// どのメソッドでもstateに簡単にアクセスできる

class BoardBox extends React.Component {

  showStatus () {
    const {squares,xIsNext} = this.props
    const winner = this.calculateWinner(squares);
    if (winner) {
      return 'Winner: ' + winner;
    } else {
      return 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  }

  calculateWinner () {
    const {squares} = this.props
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

  render() {
    const { squares, onSquareClick} = this.props
    return (
      <div>
        <div className="status">{ this.showStatus() }</div>
        <div className="board-row">
          <Square value={squares[0]} onClick={() => onSquareClick(0, this.calculateWinner())} />
          <Square value={squares[1]} onClick={() => onSquareClick(1, this.calculateWinner())} />
          <Square value={squares[2]} onClick={() => onSquareClick(2, this.calculateWinner())} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => onSquareClick(3, this.calculateWinner())} />
          <Square value={squares[4]} onClick={() => onSquareClick(4, this.calculateWinner())} />
          <Square value={squares[5]} onClick={() => onSquareClick(5, this.calculateWinner())} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => onSquareClick(6, this.calculateWinner())} />
          <Square value={squares[7]} onClick={() => onSquareClick(7, this.calculateWinner())} />
          <Square value={squares[8]} onClick={() => onSquareClick(8, this.calculateWinner())} />
        </div>
      </div>
    )
  }

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