import dayjs from 'dayjs';

import { useTasksContext } from 'src/context/TasksContext';
import { TaskKind, type Task } from 'src/types/task';

import styles from './ButtonAddTask.module.css';

export const ButtonAddTask = () => {
  const { onAdd } = useTasksContext();

  const handleAdd = () => {
    const currentDay = dayjs();

    const task: Task = {
      id: currentDay.valueOf(),
      startDay: currentDay.valueOf(),
      endDay: currentDay.valueOf(),
      text: 'Новая задача',
      type: TaskKind.ToDo,
      isNew: true,
    };

    onAdd(task);
  };

  return (
    <button onClick={handleAdd} className={styles['add-button']}>
    + Добавить
  </button>
  );
};
