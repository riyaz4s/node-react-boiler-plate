import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_SUBJECT_LIST } from '../actions/types';
import { getSub } from '../api/sub';
import { updateSubjectList } from '../actions';

export const getSubList = function* () {
  try {
    const sub = yield call(getSub);
    yield put(updateSubjectList(sub));

  }
  catch (error){
    console.error(error);
  }
};

export default function* navSaga() {
  yield takeEvery(GET_SUBJECT_LIST, getSubList);
}