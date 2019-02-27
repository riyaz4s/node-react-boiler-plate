import { UPDATE_CHAPTER_LIST } from 'client/javascripts/actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CHAPTER_LIST: {
      const newState = {...state};
      newState.chapters =action.chapters;
      return newState;
    }
    default:
      return state;
  }
}
