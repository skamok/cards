import React from "react";
import styles from "./LoginForm.module.scss";
import { useState, useCallback, useEffect } from "react";
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {loadUser} from '../../redux/actions/user';

interface IErrors {
  login: boolean;
  password: boolean;
  message: boolean;
}

interface IInputs {
  login: string;
  password: string;
}

function LoginForm() {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const [inputs, setInputs] = useState<IInputs>({
    login: '',
    password: ''
  });

  const [errors, setErrors] = useState<IErrors>({
    login: false,
    password: false,
    message: false
  });

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setInputs({...inputs, [name]: value});
    setErrors({...errors, [name]: false, message: false});
  }

  const btnLoginClick = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputs.login && inputs.password) {
      dispatch(loadUser({login: inputs.login, password: inputs.password}));
    } else {
      setErrors((prev) => {
        return {...prev, login: inputs.login ? false : true, password: inputs.password ? false : true}
      });
    }
  }, [inputs, dispatch]);

  useEffect(() => {
    if (user.error) {
      setErrors((prev) => ({...prev, message: true}))
    }
  }, [user.error]);

  return (
    <form className={styles.form} onSubmit={btnLoginClick}>
      <input
        className={classNames(styles.form__input, {[styles.form__input_error]: errors.login})}
        type="text"
        name="login"
        placeholder="input login"
        value={inputs.login}
        onChange={inputChange}
      />
      <input
        className={classNames(styles.form__input, {[styles.form__input_error]: errors.password})}
        type="password"
        name="password"
        placeholder="input password"
        value={inputs.password}
        onChange={inputChange}
      />
      <p className={classNames(styles.form__message, {[styles.form__message_visible]: errors.message})}>Wrong username or password!</p>
      <button className={styles.form__button} type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
