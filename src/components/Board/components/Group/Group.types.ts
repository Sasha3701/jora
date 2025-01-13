import type { Task, taskKindTypes } from 'src/types/task';

export interface GroupProps {
  readonly onDrop: (type: taskKindTypes) => void;
  readonly onDragStart: (task: Task) => void;
  readonly items: Array<Task>;
  readonly type: taskKindTypes;
}
