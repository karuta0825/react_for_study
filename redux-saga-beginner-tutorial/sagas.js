import assert from 'assert'
import { delay } from 'redux-saga'
import { put, call, takeEvery, all } from 'redux-saga/effects'

export function* helloSaga() {
  console.log("Hello Saga");
}

function time (second) {
  return new Promise( (res) => {
    setTimeout( ()=>{
      console.log('result')
      res();
    },second)
  })
}

export function* incrementAsync( action ) {
  // yield delay(1000);
  yield call( time, 1000 );
  console.log(action); // { type:'INCREMENT_ASYNC', 'payload' : 'async' }
  // yield time(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ]);
}

