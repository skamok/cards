import {userReducer} from './user';
import {cardsReducer} from './cards';

const rootReducer = {
  user: userReducer,
  cards: cardsReducer
}

export default rootReducer;
