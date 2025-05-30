import userEvent from '@testing-library/user-event';
import { setupTodosActions } from 'tests/helpers/setupTodosActions.utils';

describe('TodosActions', () => {
  it('should render TodosActions', () => {
    const {
      todosActionsElement,
      deleteAllTodosButton,
      resetCompletedTodosButton,
      showAllTodosButton,
      showCompletedTodosButton,
      showActiveTodosButton
    } = setupTodosActions();

    expect(todosActionsElement).toBeInTheDocument();
    expect(deleteAllTodosButton).toBeInTheDocument();
    expect(resetCompletedTodosButton).toBeInTheDocument();
    expect(resetCompletedTodosButton).not.toBeDisabled();
    expect(showAllTodosButton).toBeInTheDocument();
    expect(showCompletedTodosButton).toBeInTheDocument();
    expect(showActiveTodosButton).toBeInTheDocument();
  });

  it('should click delete all todos button', async () => {
    const { deleteAllTodos, deleteAllTodosButton } = setupTodosActions();

    await userEvent.click(deleteAllTodosButton);

    expect(deleteAllTodos).toHaveBeenCalledTimes(1);
  });

  it('should click reset completed todos button if completed todos exist', async () => {
    const { resetCompletedTodos, resetCompletedTodosButton } = setupTodosActions(false);

    await userEvent.click(resetCompletedTodosButton);

    expect(resetCompletedTodos).toHaveBeenCalledTimes(0);
  });

  it('should click reset completed todos button if completed todos do not exist', async () => {
    const { resetCompletedTodos, resetCompletedTodosButton } = setupTodosActions(true);

    await userEvent.click(resetCompletedTodosButton);

    expect(resetCompletedTodos).toHaveBeenCalledTimes(1);
  });

  it('should click show all todos button', async () => {
    const { showAllTodosButton, setFilter } = setupTodosActions();

    await userEvent.click(showAllTodosButton);

    expect(setFilter).toHaveBeenCalledTimes(1);
  });

  it('should click show completed todos button', async () => {
    const { showCompletedTodosButton, setFilter } = setupTodosActions();

    await userEvent.click(showCompletedTodosButton);

    expect(setFilter).toHaveBeenCalledTimes(1);
  });

  it('should click show active todos button', async () => {
    const { showActiveTodosButton, setFilter } = setupTodosActions();

    await userEvent.click(showActiveTodosButton);

    expect(setFilter).toHaveBeenCalledTimes(1);
  });
})
