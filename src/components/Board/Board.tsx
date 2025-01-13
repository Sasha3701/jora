import { useState } from 'react';

import { useTasksContext } from 'src/context/TasksContext';
import type { taskKindTypes, Task } from 'src/types/task';
import { groups } from 'src/constants/task';

import { Group } from './components';
import styles from './Board.module.css';

export const Board = () => {
  const { onChangeType, tasks } = useTasksContext();

  const [dragTask, setDragTask] = useState<Task | null>(null);

  const handleDragStart = (task: Task) => setDragTask(task);

  const handleDrop = (type: taskKindTypes) => {
    if (dragTask) {
      onChangeType({ id: dragTask?.id, type });
    }
  };

  return (
    <div className={styles.board}>
      {groups.map(group => (
        <Group
          key={group}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
          items={tasks.filter(({ type }) => type === group)}
          type={group}
        />
      ))}
    </div>
  );
};
