export interface ActionButtonsProps {
  readonly onEdit: () => void;
  readonly onRemove: () => void;
  readonly isEditAvailable?: boolean;
}
