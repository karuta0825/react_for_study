import { combineReducers } from 'redux'
import squares from './squares'
import xIsNext from './xIsNext'

const myReducers = combineReducers({
  squares,
  xIsNext
})

export default myReducers