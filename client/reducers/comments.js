import { ADD_COMMENT, REMOVE_COMMENT } from '../constants';

function postComments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      const { postId, author, comment } = action;
      const newState = [...state];

      newState.push({text: comment, user: author});
      return newState;
    case REMOVE_COMMENT:
      const filtered = [...state].filter((e, i) => i !== action.i);

      return filtered;
    default:
      return state;
  }
}

function commentsReducer (state = {}, action) {
  const { postId } = action;
  const newState = {...state};

  if (!newState[postId]) {
    newState[postId] = [];
  }
  newState[postId] = postComments(newState[postId], action)
  return newState;

}

export default commentsReducer;
