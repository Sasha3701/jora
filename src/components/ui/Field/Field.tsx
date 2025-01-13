import { FieldProps } from './Field.types';
import styles from './Field.module.css';

export const Field = ({ label, value, isForm = false }: FieldProps) => (
  <div className={styles.field}>
    <span className={styles.field__label}>{label}:</span>
    {isForm ? value : <span className={styles.field__value}>{value}</span> }
  </div>
);
