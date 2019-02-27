import { UPDATE_SUBJECT_LIST } from 'client/javascripts/actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SUBJECT_LIST: {
      const newState = {...state};
      newState.subjects =action.sub;
      return newState;
    }
    default:
      return state;
  }
}
