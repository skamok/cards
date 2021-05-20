import React, { useRef } from 'react';
import styles from './Description.module.scss';
import {IField} from '../types';

interface IProps {
  field: IField;
  inputChange(event: React.ChangeEvent<HTMLTextAreaElement>): void
}

const Description: React.FC<IProps> = ({field, inputChange}) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  if (field.error) ref.current!.focus();

  return (
    <div className={styles.description}>
    <textarea ref={ref} name={field.id} cols={40} rows={3} placeholder={field.placeholder} value={field.value} onChange={inputChange}></textarea>
    <span className={`${styles.description__warning} ${field.error ? styles.description__warning_show : ''}`}>Required</span>
    </div>
  )
}

export default Description;
