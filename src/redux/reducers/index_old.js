import { combineReducers } from 'redux';
import cards from './cards_old.js';
import user from './user_old.js';

const reducer = combineReducers({
  cards,
  user
});

export default reducer;
