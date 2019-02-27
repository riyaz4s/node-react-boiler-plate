import { takeEvery, put, call } from 'redux-saga/effects';
import {GET_CHAPTER_LIST} from '../actions/types';
import { getChapter } from '../api/chap';
import { updateChapterList } from '../actions';

export const getChapterList = function* (action) {
  try {
    const sub = yield call(getChapter, action.sub);
    yield put(updateChapterList(sub));

  }
  catch (error){
    console.error(error);
  }
};

export default function* chapSaga() {
  yield takeEvery(GET_CHAPTER_LIST, getChapterList);
}