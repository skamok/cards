import { apiLogin } from '../../api/mockedApi.js';
import { LOAD_USER, LOGOUT_USER, ERROR_USER } from './types_old.js';

export const loadUser = (login, password) => 
  (dispatch) => apiLogin(login, password)
    .then((result) => {
      if (result) {
        const userInfo = {...result, logged: true};
        dispatch({type: LOAD_USER, payload: userInfo})
      } else {
        dispatch({type: ERROR_USER, payload: true})
    }
});

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}
