import { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.scss';

function InputField({field, inputChange}) {
  const ref = useRef(null);
  if (field.error) ref.current.focus();
  return (
    <div className={styles.field}>
      <label htmlFor={field.id} className={styles.field__label}>{field.name}</label>
      <input ref={ref} type={field.type} placeholder={field.placeholder} name={field.id} id={field.id} value={field.value} onChange={inputChange} className={styles.field__title}/>
      <span className={`${styles.field__warning} ${field.error ? styles.field__warning_show : ''}`}>Required</span>
    </div>
  )
}

InputField.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    imageUrl: PropTypes.string,
    error: PropTypes.bool.isRequired
  }).isRequired,
  inputChange: PropTypes.func.isRequired
};

export default InputField;
