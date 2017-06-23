import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commentsReducer from './comments';
import postsReducer from './posts';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  routing: routerReducer
});

export default rootReducer;
