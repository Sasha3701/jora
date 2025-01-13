import { useState, useCallback, useMemo, useEffect, useRef } from 'react';

import { TaskKind, type Task } from 'src/types/task';
import { filterTasks, initTasks, saveTasks } from 'src/utils';

export const useTasks = (searchText?: string) => {
  const [tasks, setTasks] = useState<Array<Task>>(() => initTasks());

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      saveTasks(tasks);
      return;
    }

    isFirstRender.current = false;
  }, [tasks]);

  const filtredTasks = useMemo(() => searchText ? filterTasks(tasks, searchText) : tasks, [tasks, searchText]);

  const handleAdd = useCallback((task: Omit<Task, 'type'>) => {
    setTasks(prevState => [...prevState, { ...task, type: TaskKind.ToDo, isNew: true }]);
  }, []);

  const handleEditTask = useCallback((task: Task) => {
    setTasks(prevState => [...prevState.filter(item => item.id !== task.id), task]);
  }, []);

  const handleRemove = useCallback((id: number) => {
    setTasks(prevState => prevState.filter(item => item.id !== id));
  }, []);

  const handleChangeType = useCallback(({
    id,
    type,
  }: Pick<Task, 'id' | 'type'>) => {
    setTasks(prevState => prevState.map(item => item.id === id ? { ...item, type } : item));
  }, []);

  return {
    onRemove: handleRemove,
    onAdd: handleAdd,
    onChangeType: handleChangeType,
    onEditTask: handleEditTask,
    tasks: filtredTasks,
  };
};
