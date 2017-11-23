import { SET_VALUE_INTO_SQUARE } from '../constants/ActionTypes'

const fillSquare = (i, xIsNext) => {
  const value = ( xIsNext ) ? "X" : "O";
  return {
    type: SET_VALUE_INTO_SQUARE,
    index: i,
    value
  }
}

export default fillSquare