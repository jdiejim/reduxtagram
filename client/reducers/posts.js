import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT } from '../constants';

function postsReducer (state = [], action) {
  switch (action.type) {
    case INCREMENT_LIKES:
      const newState = [...state];
      newState[action.index].likes++;
      return newState;
    default:
      return state;
  }
}

export default postsReducer;
