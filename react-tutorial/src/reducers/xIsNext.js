import { SET_VALUE_INTO_SQUARE } from '../constants/ActionTypes'


const xIsNext = ( state = true, action ) => {

  switch ( action.type ) {

    case SET_VALUE_INTO_SQUARE:
      return !state

    default:
      return state

  }

}

export default xIsNext