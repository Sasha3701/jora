import { memo } from 'react';
import DatePicker, { type DatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './Datepicker.module.css';

export const Datepicker = memo((props: DatePickerProps) => (
  <DatePicker
    className={styles.datepicker}
    dateFormat='dd.MM.yyyy'
    {...props}
  />
));

Datepicker.displayName = 'Datepicker';
