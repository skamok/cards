import { useState, useCallback, useRef} from 'react';
import styles from './CardsCreationForm.module.scss';
import { v1 as uuidv1 } from 'uuid';
import { addCard } from '../../redux/actions/cards_old.js';

function CardsCreationForm() {

  

  const title = useRef(null);
  const price = useRef(null);
  const imageUrl = useRef(null);
  const description = useRef(null);

  const [inputs, setInputs] = useState({
    title: '',
    price: 1,
    description: '',
    imageUrl: ''
  });
  
  const [inputWarning, setInputWarning] = useState(() => null);

  const checkInputComplete = useCallback(() => {
    let error = null;
    const refs = [title, price, imageUrl, description];
    for (const input in inputs) {
      if (!inputs[input]) {
        const element = refs.find(ref => ref.current.name === input).current;
        error = {
          sourceInput: element,
          style: {
            top: element.getBoundingClientRect().top,
            left: element.getBoundingClientRect().left,
            width: element.getBoundingClientRect().width,
            height: element.getBoundingClientRect().height
          }
        };
        break;
      }
    }
    return error;
  }, [inputs]);

  const errorMessageClick = () => {
    inputWarning.sourceInput.focus();
    setInputWarning(null);
  }

  const btnAddClick = useCallback((event) => {
    event.preventDefault();
    const error = checkInputComplete();
    setInputWarning(error);
    if (!error) {
      const card = {
        id: uuidv1(),
        title: inputs.title,
        description: inputs.description,
        price: Number.parseFloat(inputs.price),
        imageUrl: inputs.imageUrl
      }
      store.dispatch(addCard(card));
    }
  }, [inputs, checkInputComplete, store]);

  const inputChange = (event) => {
    const {name, value} = event.currentTarget;
    setInputs({...inputs, [name]: value});
  }

  return (
    <form className={styles.form} onSubmit={btnAddClick}>
      <div className={styles.form__left}>
        <div className={styles.form__input}>
          <label htmlFor="title" className={styles.form__label}>Title</label>
          <input type="text" placeholder="Title" ref={title} name="title" id="title" maxLength="32" value={inputs.title} onChange={inputChange} className={styles.form__title}/>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="price" className={styles.form__label}>Price</label>
          <input type="number" placeholder="price" ref={price} name="price" id="price" value={inputs.price} onChange={inputChange} className={styles.form__price}/>
        </div>
        <div className={styles.form__input}>
        <label htmlFor="imageUrl" className={styles.form__label}>Link to image</label>
          <input type="text" placeholder="link to image" ref={imageUrl} name="imageUrl" id="imageUrl" value={inputs.imageUrl} onChange={inputChange} className={styles.form__link}/>
        </div>
      </div>
      <div className={styles.form__right}>
        <textarea name="description" cols="40" rows="3" ref={description} placeholder="Description" value={inputs.description} onChange={inputChange} className={styles.form__description}></textarea>
        <button className={styles.form__button}>Add new item</button>
      </div>
      {
        inputWarning &&
        <span className={styles.form__error} style={inputWarning.style} onClick={errorMessageClick}>{`Please input ${inputWarning.sourceInput.name}`}</span>
      }
    </form>
  )
}

export default CardsCreationForm;
