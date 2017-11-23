import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'

import rootSaga from './sagas'
import { incrementAsync } from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const action = (type, payload) => store.dispatch({type:type, payload})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC', store.getState())} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render);

const g = incrementAsync();
console.log( g.next() );
console.log( g.next() );


