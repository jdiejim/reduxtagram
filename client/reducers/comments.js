import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT } from '../constants';

function commentsReducer (state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state;
    default:
      console.log(state, action);
      return state;
  }
}

export default commentsReducer;
