export function* helloSaga() {
  console.log('Hello Sagas!')
}

import { put, takeEvery } from 'redux-saga/effects'

//create a delay function that returns a Promise that will resolve after a specified number of milliseconds (Set time out)
const delay = (ms) => new Promise(res => setTimeout(res, ms))

//incrementAsync Saga is suspended until the Promise returned by delay resolves, which will happen after 1 second.
export function* incrementAsync() {
  yield delay(1000) //suspend
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync) 
  //takeEvery, a helper function by redux-saga, to listen for dispatched INCREMENT_ASYNC actions and run incrementAsync each time.
}