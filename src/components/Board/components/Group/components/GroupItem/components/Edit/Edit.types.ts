import { type Task } from 'src/types/task';

export interface EditProps {
  readonly onCancel: (value: boolean) => void;
  readonly item: Task;
}
