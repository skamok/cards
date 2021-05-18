export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';

export const LOAD_USER = 'LOAD_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ERROR_USER = 'ERROR_USER';

export interface IUserInfo {
    firstName: string;
    lastName: string;
    image: string;
    alt: string;
    description: string;
    logged: boolean;
    error: boolean;
}

export  interface IUser {
  login: string;
  psw: string;
  info: IUserInfo;
}
