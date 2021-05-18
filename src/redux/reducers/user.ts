import { LOAD_USER, LOGOUT_USER, ERROR_USER, IUserInfo, IUser } from '../actions/types';
import { createReducer } from '@reduxjs/toolkit';
import {loadUserA, defaultUser} from '../actions/user';

const initialState = defaultUser;

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUserA, (state, action) => {
      return action.payload
    })
    .addDefaultCase((state, action) => {
      return initialState;
    });
})
