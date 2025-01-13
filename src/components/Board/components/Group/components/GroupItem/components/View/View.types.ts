import { type Task } from 'src/types/task';

export interface ViewProps {
  readonly onRemove: () => void;
  readonly onEdit: (value: boolean) => void;
  readonly item: Task;
  readonly isEditAvailable: boolean;
  readonly isEdit: boolean;
  readonly isHover: boolean;
}
