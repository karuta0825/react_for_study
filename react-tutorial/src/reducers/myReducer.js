import { SET_VALUE_INTO_SQUARE, CALUCULATE_WINNER } from '../constants/ActionTypes'

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const myReducer = (state = initialState, action) => {

  switch ( action.type ) {

    case SET_VALUE_INTO_SQUARE:

      const squares = state.squares.slice();

      if ( action.winner || squares[action.index] ) {
        return state
      }

      squares[action.index] = (state.xIsNext) ? 'X' : 'O';
      return {
        squares,
        xIsNext: !state.xIsNext
      }

    default:
      return state

  }
}

export default myReducer
