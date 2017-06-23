import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT } from '../constants';

export const increment = (index) => ({ type: INCREMENT_LIKES, index });
export const addComment = (postId, author, comment) => ({ type: ADD_COMMENT, postId, author, comment });
export const removeComment = (postId, i) => ({ type: REMOVE_COMMENT, postId, i });
