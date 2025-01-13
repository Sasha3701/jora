import { type PropsWithChildren } from 'react';

import styles from './WrapperBackground.module.css';

export const WrapperBackground = ({ children }: PropsWithChildren) => (
  <div className={styles.container}>
    {children}
  </div>
);
