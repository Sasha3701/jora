import dayjs from 'dayjs'

import items from 'src/data/tasks.json';
import { type Task } from 'src/types/task';
import { DATE_FORMAT, TASKS_STORAGE_KEY } from 'src/constants/task';

import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat)

const validateItemProp = (
  obj: Record<string, unknown>,
  prop: string,
  type: 'string' | 'number',
  validateFn?: (value: unknown) => void,
) => prop in obj && typeof obj[prop] === type && (validateFn ? validateFn(obj[prop]) : true);

const validateItems = (data: string) => {
  try {
    const { items } = JSON.parse(data);

    if (items && Array.isArray(items)) {
      return items.every(item => 
        validateItemProp(item, 'id', 'number') &&
        validateItemProp(item, 'type', 'string', value => ['todo', 'in_progress', 'review', 'done'].includes(value as string)) &&
        validateItemProp(item, 'startDay', 'number') &&
        validateItemProp(item, 'endDay', 'number') &&
        validateItemProp(item, 'text', 'string')
      );
    }
  
    return false;
  } catch(e) {
    console.log(e);

    return false;
  }
};

export const initTasks = (): Array<Task> => {
  const itemsStorage = localStorage.getItem(TASKS_STORAGE_KEY);

  if (itemsStorage && validateItems(itemsStorage)) {
    return (JSON.parse(itemsStorage).items as Array<Task>).map(item => ({ ...item, isNew: false }));
  }

  return items as Array<Task>;
};

export const filterTasks = (tasks: Array<Task>, searchText: string): Array<Task> => {
  if (dayjs(searchText, DATE_FORMAT).isValid()) {
    return tasks.filter(({ endDay, startDay }) => searchText === dayjs(endDay).format(DATE_FORMAT) || searchText === dayjs(startDay).format(DATE_FORMAT));
  }

  return tasks.filter(({ text }) => text.toLowerCase().includes(searchText.toLowerCase()));
};

export const saveTasks = (tasks: Array<Task>) =>
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify({ items: tasks.map(item => ({ ...item, isNew: undefined })) }));

export const sortTasks = (tasks: Array<Task>) => {
  const copyTasks = [...tasks];

  copyTasks.sort((a, b) => a.startDay - b.startDay);

  return copyTasks;
};

export const checkTaskExpired = (endDay: number) => {
  const currentDate = dayjs().set('milliseconds', 0).set('seconds', 0).set('minutes', 0).set('hour', 0);

  return currentDate.valueOf() > endDay;
};
