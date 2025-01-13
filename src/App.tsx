import { type ChangeEvent, useCallback, useState } from 'react';

import { Board, Title, WrapperBackground } from 'src/components';
import { TasksContext } from 'src/context/TasksContext';
import { useTasks } from 'src/hooks/useTasks';
import { SearchInput } from 'src/components/ui';

import './App.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const { onEditTask, onAdd, onChangeType, onRemove, tasks } = useTasks(searchValue);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value), []);

  return (
    <main>
      <TasksContext.Provider
        value={{
          onEdit: setIsEdit,
          onAdd,
          onEditTask,
          onChangeType,
          onRemove,
          tasks,
          isEdit,
        }}
      >
        <WrapperBackground>
          <div className='panel'>
            <Title />
            <div className='panel__search-input'>
              <SearchInput value={searchValue} onChange={handleChange} />
            </div>
          </div>
          <Board />
        </WrapperBackground>
      </TasksContext.Provider>
    </main>
  )
};
