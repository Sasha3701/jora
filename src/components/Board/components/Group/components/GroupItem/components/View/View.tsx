import dayjs from 'dayjs';

import { Field } from 'src/components/ui';
import { DATE_FORMAT } from 'src/constants/task';

import { ActionButtons } from './components';
import { type ViewProps } from './View.types';
import styles from './View.module.css';

export const View = ({
  onRemove,
  onEdit,
  isEditAvailable,
  isEdit,
  isHover,
  item: { startDay, endDay, text },
}: ViewProps) => (
  <>
    <div className={styles.container}>
      <Field label='Начало' value={dayjs(startDay).format(DATE_FORMAT)} />
      <Field label='Окончание' value={dayjs(endDay).format(DATE_FORMAT)} />
      <Field label='Описание' value={text} />
    </div>
    {!isEdit && isHover && (
      <ActionButtons  
        onEdit={() => onEdit(true)}
        onRemove={onRemove}
        isEditAvailable={isEditAvailable}
      />
    )}
  </>
);
