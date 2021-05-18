import {ADD_CARD, DELETE_CARD, LOAD_CARDS} from './types_old.js';
import {apiCards} from '../../api/mockedApi.js';

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    payload: card
  }
}

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id
  }
}

export const loadCards = () => 
  (dispatch) => apiCards()
    .then(data => dispatch({type: LOAD_CARDS, payload: data}));
