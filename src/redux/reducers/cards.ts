import { createReducer } from '@reduxjs/toolkit';
import {addCard, deleteCard, loadCards} from '../actions/cards';
import {ICard} from '../actions/types';

const initialState: Array<ICard> = [];

export const cardsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCards.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(addCard, (state, action) => {
      state.splice(0, 0, action.payload);
    })
    .addCase(deleteCard, (state, action) => {
      return state.filter((card) => card.id !== action.payload);
    })
    .addDefaultCase((state, action) => {
      return state;
    })
});
