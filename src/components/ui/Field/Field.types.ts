import { type ReactNode } from 'react';

export interface FieldProps {
  readonly label: string;
  readonly value: string | ReactNode;
  readonly isForm?: boolean;
}
