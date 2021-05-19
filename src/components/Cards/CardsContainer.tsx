import React, { useEffect, useState } from 'react'
import styles from './CardsContainer.module.scss';
import Card from './Card';
import CardsCreationForm from './CardsCreationForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import {loadCards} from '../../redux/actions/cards';

function CardsContainer() {
  
  const cards = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Loading...');
    if (!cards.length) {
      dispatch(loadCards());
    }
  }, [cards, dispatch]);
  
  return (
    <section className={styles.cardsCntr}>
      {/* <CardsCreationForm /> */}
      <div className={styles.cardsCntr__cards}>
        {
          cards.length
          ? cards.map((card) => <Card key={card.id} card={card}/>)
          : <p className={styles.cardsCntr__message}>{message}</p>
        }
      </div>      
    </section>
  )
}

export default CardsContainer;
