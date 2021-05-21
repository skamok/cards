import { useRef } from 'react';
import styles from './InputField.module.scss';
import {IField} from '../types';

interface IProps {
  field: IField;
  inputChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const InputField: React.FC<IProps> = ({field, inputChange}) => {
  const ref = useRef<HTMLInputElement | null>(null);

  if (field.error) ref.current!.focus();

  return (
    <div className={styles.field}>
      <label htmlFor={field.id} className={styles.field__label}>{field.name}</label>
      <input ref={ref} type={field.type} placeholder={field.placeholder} name={field.id} id={field.id} value={field.value} onChange={inputChange} className={styles.field__title}/>
      <span className={`${styles.field__warning} ${field.error ? styles.field__warning_show : ''}`}>Required</span>
    </div>
  )
}

export default InputField;
