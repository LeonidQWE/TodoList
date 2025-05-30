import { render, screen } from '@testing-library/react';
import { TodosActions } from 'components';

export const setupTodosActions = (completedTodosExist = true) => {
  const deleteAllTodos = jest.fn();
  const resetCompletedTodos = jest.fn();
  const setFilter = jest.fn();

  render(<TodosActions
    deleteAllTodos={deleteAllTodos}
    resetCompletedTodos={resetCompletedTodos}
    completedTodosExist={completedTodosExist}
    setFilter={setFilter}/>);

  const todosActionsElement = screen.getByTestId('todosActions');
  const deleteAllTodosButton = screen.getByTitle('Reset Todos');
  const resetCompletedTodosButton = screen.getByTitle('Reset Completed Todos');
  const showAllTodosButton = screen.getByTitle('Show All Todos');
  const showCompletedTodosButton = screen.getByTitle('Show Completed Todos');
  const showActiveTodosButton = screen.getByTitle('Show Active Todos');


  return {
    deleteAllTodos,
    resetCompletedTodos,
    setFilter,
    todosActionsElement,
    deleteAllTodosButton,
    resetCompletedTodosButton,
    showAllTodosButton,
    showCompletedTodosButton,
    showActiveTodosButton,
  };
}
