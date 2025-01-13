import { type ChangeEvent, useCallback, useState } from 'react';
import dayjs from 'dayjs';

import { Field, Input, Datepicker } from 'src/components/ui';
import { CheckIcon, CrossIcon } from 'src/icons';
import { useTasksContext } from 'src/context/TasksContext';
import { type Task } from 'src/types/task';

import { type EditProps } from './Edit.types';
import styles from './Edit.module.css';

export const Edit = ({ onCancel, item: { startDay, endDay, text, ...restItems } }: EditProps) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(dayjs(startDay).toDate());
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(dayjs(endDay).toDate());
  const [description, setDescription] = useState(text);

  const { onEditTask } = useTasksContext();

  const handleSave = () => {
    const task: Task = {
      startDay: selectedStartDate?.valueOf(),
      endDay: selectedEndDate?.valueOf(),
      text: description,
      ...restItems,
    };

    onEditTask(task);
    onCancel(false);
  };

  const handleChangeStartDay = useCallback((date: Date | null) => setSelectedStartDate(date as Date), []);

  const handleChangeEndDay = useCallback((date: Date | null) => setSelectedEndDate(date as Date), []);

  const handleChangeDescription = useCallback((e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value), []);

  return (
    <div className={styles.container}>
      <Field
        value={
          <Datepicker
            onChange={handleChangeStartDay}
            selected={selectedStartDate}
          />
        }
        label='Начало'
        isForm
      />
      <Field
        value={
          <Datepicker
            onChange={handleChangeEndDay}
            selected={selectedEndDate}
          />
        }
        label='Окончание'
        isForm
      />
      <Field
        value={
          <Input
            onChange={handleChangeDescription}
            value={description}
          />
        }
        label='Описание'
        isForm
      />
      <div className={styles.buttons}>
        <button onClick={() => onCancel(false)} className={styles.button}>
          <CrossIcon />
        </button>
        <button onClick={handleSave} className={styles.button}>
          <CheckIcon />
        </button>
      </div>
    </div>
  );
};
