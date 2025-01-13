import { memo, type InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

export const Input = memo((props: Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>) => (
  <input className={styles.input} {...props}/>
));

Input.displayName = 'Input';
