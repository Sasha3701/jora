export enum TaskKind {
  ToDo = 'todo',
  InProgress = 'in_progress',
  Review = 'review',
  Done = 'done',
}

export type taskKindTypes = `${TaskKind}`;

export interface Task {
  id: number;
  type: taskKindTypes;
  startDay: number;
  endDay: number;
  text: string;
  isNew?: boolean;
}