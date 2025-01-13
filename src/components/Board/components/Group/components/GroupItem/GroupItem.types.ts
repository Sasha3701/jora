import { type Task } from 'src/types/task';

export interface GroupItemProps {
  readonly onDragStart: (task: Task) => void;
  readonly item: Task;
}
