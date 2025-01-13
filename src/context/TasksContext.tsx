import { createContext, useContext } from 'react';

import { type Task } from '../types/task';

export const TasksContext = createContext<{
  onAdd: (task: Omit<Task, 'type'>) => void,
  onEditTask: (task: Task) => void,
  onRemove: (id: number) => void,
  onChangeType: (value: Pick<Task, 'id' | 'type'>) => void,
  onEdit: (value: boolean) => void,
  tasks: Array<Task>,
  isEdit: boolean,
} | null>(null);

export const useTasksContext = () => {
  const tasksContext = useContext(TasksContext);

  if (!tasksContext) {
    throw new Error(
      "useTasksContext has to be used within <CurrentUserContext.Provider>"
    );
  }

  return tasksContext;
};
