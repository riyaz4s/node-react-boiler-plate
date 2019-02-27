import {
  GET_SUBJECT_LIST,
  UPDATE_SUBJECT_LIST,
  GET_CHAPTER_LIST,
  UPDATE_CHAPTER_LIST,
} from './types';

export const getSubjectList = () => {
  return { type: GET_SUBJECT_LIST  };
};

export const updateSubjectList = (sub) => {
  return { type: UPDATE_SUBJECT_LIST, sub  };
};

export const getChapterList = (sub) => {
  return { type: GET_CHAPTER_LIST, sub  };
};

export const updateChapterList = (chapters) => {
  return { type: UPDATE_CHAPTER_LIST, chapters  };
};