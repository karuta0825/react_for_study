import { SET_VALUE_INTO_SQUARE, CALUCULATE_WINNER } from '../constants/ActionTypes'

const initialState = Array(9).fill(null)

const myReducer = (state = initialState, action) => {

  switch ( action.type ) {

    case SET_VALUE_INTO_SQUARE:

      const squares = state.slice();

      if ( squares[action.index] ) {
        return state
      }

      squares[action.index] = action.value
      return squares

    default:
      return state

  }
}

export default myReducer
