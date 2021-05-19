import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LOAD_USER, LOGOUT_USER, IUserInfo } from './types';
import {apiLogin} from '../../api/mockedApi';

export const defaultUser: IUserInfo = {
  firstName: 'Guest',
  lastName: '',
  image: 'https://secure.gravatar.com/avatar/50c30aae0f1878a17788458f7fefbcfe?s=252&d=mm&r=g',
  alt: 'guest',
  description: '',
  logged: false,
  error: false
}

interface IAuth {
  login: string,
  password: string
}

export const logoutUser = createAction(LOGOUT_USER, () => {
  return {
    payload: defaultUser
  }
});

export const loadUser = createAsyncThunk(
  LOAD_USER, 
  async (auth: IAuth) => {
    const result = await apiLogin(auth.login, auth.password);
    if (result) {
      const userInfo = {...result, logged: true, error: false};
      return userInfo as IUserInfo;
    } else {
      const userInfo = {...defaultUser, error: true, logged: false};
      return userInfo as IUserInfo;
    }    
  }
);
