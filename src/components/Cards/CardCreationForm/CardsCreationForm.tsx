import React, { useState, useCallback} from 'react';
import styles from './CardsCreationForm.module.scss';
import { v1 as uuidv1 } from 'uuid';
import { addCard } from '../../../redux/actions/cards';
import Description from './Description';
import InputField from './InputField';
import {IField} from './types';
import { ICard } from '../../../redux/actions/types';
import { useAppDispatch } from '../../../redux/hooks/hooks';

interface IFields {
  [index: string]: IField;
  title: IField;
  price: IField;
  imageUrl: IField;
  description: IField;
}

const initialState: IFields = {
  title: {
    name: 'Title',
    id: 'title',
    value: '',
    placeholder: 'Input title',
    type: 'text',
    error: false
  },
  price: {
    name: 'Price',
    id: 'price',
    value: 1,
    placeholder: 'Input price',
    type: 'number',
    error: false
  },
  imageUrl: {
    name: 'Link to image',
    id: 'imageUrl',
    value: '',
    placeholder: 'Input link',
    type: 'text',
    error: false
  },
  description: {
    name: '',
    id: 'description',
    value: '',
    placeholder: 'Input some words',
    type: '',
    error: false
  },
}

function CardsCreationForm() {
  
  const dispatch = useAppDispatch();
  const [fields, setFields] = useState<IFields>(initialState);

  const checkInputComplete = useCallback(() => {
    const input = Object.entries(fields).find((input) => !input[1].value);
    if (input) {
      setFields((prev) => {
        const node = {...prev[input[0]], error: true};
        return {...prev, [input[0]]: node}
      });
      return true;
    }
    return false;
  }, [fields]);

  const btnAddClick = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error: boolean = checkInputComplete();
    if (!error) {
      const card: ICard = {
        id: uuidv1(),
        title: fields.title.value as string,
        description: fields.description.value as string,
        price: fields.price.value as number,
        imageUrl: fields.imageUrl.value as string
      }
      dispatch(addCard(card));
    }
  }, [checkInputComplete, fields, dispatch]);

  const inputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value: val} = event.currentTarget;
    setFields((prev) => {
      const node: IField = {...prev[name], value: val, error: false};
      return {...prev, [name]: node}
    });
  }, []);

  return (
    <form className={styles.form} onSubmit={btnAddClick}>
      <div className={styles.form__left}>        
        <InputField field={fields.title}  inputChange={inputChange}/>
        <InputField field={fields.price}  inputChange={inputChange}/>
        <InputField field={fields.imageUrl}  inputChange={inputChange}/>
      </div>
      <div className={styles.form__right}>
        <Description field={fields.description} inputChange={inputChange}/>
        <button className={styles.form__button}>Add new item</button>
      </div>
    </form>
  )
}

export default CardsCreationForm;
