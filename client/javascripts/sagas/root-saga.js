import {fork} from 'redux-saga/effects';
import subSaga from './sub-saga';
import chapSaga from './chapter-saga';


export default function* rootSaga() {
  yield [
    fork(subSaga),
    fork(chapSaga),
  ];
}
