import classNames from 'classnames';

import { EditIcon, TrashIcon } from 'src/icons';

import { type ActionButtonsProps } from './ActionButtons.types';
import styles from './ActionButtons.module.css';

export const ActionButtons = ({
  onEdit,
  onRemove,
  isEditAvailable = true
}: ActionButtonsProps) => (
  <div className={styles.buttons}>
    {isEditAvailable && (
      <button className={styles.button} onClick={onEdit}>
        <EditIcon width={18} height={18} />
      </button>
    )}
    <button className={classNames(styles.button, styles.buttonTrash)} onClick={onRemove}>
      <TrashIcon width={18} height={18} />
    </button>
  </div>
);
