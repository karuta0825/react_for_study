import { SET_VALUE_INTO_SQUARE } from '../constants/ActionTypes'

const fillSquare = (i, winner) => {
  return {
    type: SET_VALUE_INTO_SQUARE,
    index: i,
    winner
  }
}

export default fillSquare