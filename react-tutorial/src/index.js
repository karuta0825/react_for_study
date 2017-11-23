import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Game from './components/Game'
import myReducer from './reducers/myReducer'
import './index.css'

let store = createStore(myReducer);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

