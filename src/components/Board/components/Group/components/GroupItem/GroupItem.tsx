import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { useTasksContext } from 'src/context/TasksContext';
import { TaskKind } from 'src/types/task';
import { checkTaskExpired } from 'src/utils';

import { Edit, View } from './components';
import { type GroupItemProps } from './GroupItem.types';
import styles from './GroupItem.module.css';

export const GroupItem = ({
  onDragStart,
  item,
}: GroupItemProps) => {
  const [innerIsEdit, setInnerIsEdit] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const { onRemove, onEdit, onEditTask, isEdit } = useTasksContext();

  useEffect(() => {
    if (item.isNew) {
      setInnerIsEdit(true);
      onEdit(true);
      onEditTask({ ...item, isNew: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (value: boolean) => {
    setInnerIsEdit(value);
    onEdit(value);
    setIsHover(false);
  };

  return (
    <div
      className={classNames(styles['group-item'], {
        [styles['group-item_edited']]: innerIsEdit,
        [styles['group-item_disabled']]: !innerIsEdit && isEdit,
        [styles['group-item_expired']]: checkTaskExpired(item.endDay) && item.type !== TaskKind.Done
      })}
      onDragStart={() => onDragStart(item)}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      draggable={!isEdit}
    >
      {innerIsEdit ? (
          <Edit onCancel={handleEdit} item={item} />
        ) : (
          <View
            onRemove={() => onRemove(item.id)}
            onEdit={handleEdit}
            item={item}
            isEditAvailable={item.type === TaskKind.ToDo}
            isEdit={isEdit}
            isHover={isHover}
          />
      )}
    </div>
  );
};
