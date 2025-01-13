import { TaskKind } from 'src/types/task';
import { GhostIcon, HappyIcon, SmileIcon, UpsidDownIcon } from 'src/icons';

import { type IconGroupProps } from './IconGroup.types';
import styles from './IconGroup.module.css';

export const IconGroup = ({ type }: IconGroupProps) => {
  switch (type) {
    case TaskKind.ToDo: {
      return <HappyIcon className={styles.icon} />
    }

    case TaskKind.InProgress: {
      return <SmileIcon className={styles.icon} />
    }

    case TaskKind.Review: {
      return <UpsidDownIcon className={styles.icon} />
    }

    default: {
      return <GhostIcon className={styles.icon} />
    }
  }
};
