import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_CARD, DELETE_CARD, LOAD_CARDS, ICard } from './types';
import {apiCards} from '../../api/mockedApi';

export const addCard = createAction(ADD_CARD, (card: ICard) => {
  return {
    payload: card
  }
});

export const deleteCard = createAction(DELETE_CARD, (id: string) => {
  return {
    payload: id
  }
});

export const loadCards = createAsyncThunk(
  LOAD_CARDS, 
  async () => {
    const result: Array<ICard> = await apiCards();
    return result;
  }
);
