import {ADD_CARD, DELETE_CARD, LOAD_CARDS} from '../actions/types_old.js';

const initialState = [];

const cards = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CARD: {
      return [action.payload, ...state];
    }
    case DELETE_CARD: {
      const newState = state.filter((card) => card.id !== action.payload);
      return newState;
    }
    case LOAD_CARDS: {    
      return [...action.payload];
    }
    default: {    
      return [...state];
    }
  }
}

export default cards;
