import { TaskKind } from 'src/types/task';

export const TASKS_STORAGE_KEY = 'jora-tasks';
export const DATE_FORMAT = 'DD.MM.YYYY';
export const groups = [TaskKind.ToDo, TaskKind.InProgress, TaskKind.Review, TaskKind.Done];
export const namesGroups = {
  [TaskKind.ToDo]: 'To Do',
  [TaskKind.InProgress]: 'In Progress',
  [TaskKind.Review]: 'Review',
  [TaskKind.Done]: 'Done',
};
