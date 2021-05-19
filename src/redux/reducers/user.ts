import { createReducer } from '@reduxjs/toolkit';
import {loadUser, logoutUser, defaultUser} from '../actions/user';

const initialState = defaultUser;

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUser.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(logoutUser, (state, action) => {
      return action.payload;
    })
    .addDefaultCase((state, action) => {
      return state;
    });
})
