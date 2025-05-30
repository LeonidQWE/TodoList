import { Button } from 'components';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import { Filter } from 'types/Filter';
import s from './TodosActions.module.scss';

type TodosActionsProps = {
  deleteAllTodos: () => void;
  resetCompletedTodos: () => void;
  completedTodosExist: boolean;
  setFilter: (filter: Filter) => void;
};

export const TodosActions = ({
  deleteAllTodos,
  resetCompletedTodos,
  completedTodosExist,
  setFilter,
}: TodosActionsProps) => {
  return (
    <div className={s.todosActions} data-testid='todosActions'>
      <Button
        data-testid='deleteAllTodos'
        title="Reset Todos"
        onClick={deleteAllTodos}>
        <RiRefreshLine/>
      </Button>
      <Button
        data-testid='resetCompletedTodos'
        title="Reset Completed Todos"
        onClick={resetCompletedTodos}
        disabled={!completedTodosExist}>
        <RiDeleteBin2Line/>
      </Button>
      <Button
        data-testid='showAllTodos'
        title="Show All Todos"
        onClick={() => setFilter('all')}>
        Show All Todos
      </Button>
      <Button
        data-testid='showCompletedTodos'
        title="Show Completed Todos"
        onClick={() => setFilter('completed')}>
        Show Completed Todos
      </Button>
      <Button
        data-testid='showActiveTodos'
        title="Show Active Todos"
        onClick={() => setFilter('active')}>
        Show Active Todos
      </Button>
    </div>
  )
}
