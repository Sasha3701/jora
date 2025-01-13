import { memo, type InputHTMLAttributes } from 'react';

import { SearchIcon } from 'src/icons';

import styles from './SearchInput.module.css';

export const SearchInput = memo((props: Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>) => (
  <div className={styles.container}>
    <SearchIcon className={styles.icon} />
    <input className={styles['search-input']} placeholder='поиск...' {...props}/>
  </div>
));

SearchInput.displayName = 'SearchInput';
