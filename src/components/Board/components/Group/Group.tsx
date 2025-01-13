import { useMemo, type DragEvent } from 'react';

import { namesGroups } from 'src/constants/task';
import { useTasksContext } from 'src/context/TasksContext';
import { TaskKind } from 'src/types/task';
import { sortTasks } from 'src/utils';

import { ButtonAddTask, GroupItem, IconGroup } from './components';
import { type GroupProps } from './Group.types';
import styles from './Group.module.css';

export const Group = ({
  onDrop,
  onDragStart,
  items,
  type,
}: GroupProps) => {
  const { isEdit } = useTasksContext();

  const sortedItems = useMemo(() => sortTasks(items), [items]);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.container}
      onDragOver={handleDragOver}
      onDrop={() => onDrop(type)}
    >
      <div className={styles.group}>
        <div className={styles.group__header}>
          <IconGroup type={type} />
          <h2 className={styles.title}>{namesGroups[type]}</h2>
          {!isEdit && type === TaskKind.ToDo && <ButtonAddTask />}
        </div>
        <div className={styles.group__body}>
          {sortedItems.map(item => (
            <GroupItem key={item.id} onDragStart={onDragStart} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
