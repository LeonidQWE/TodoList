import userEvent from '@testing-library/user-event';
import { setupTodosActions } from 'tests/helpers/setupTodosActions.utils';

type Buttons = 'showAllTodosButton' | 'showCompletedTodosButton' | 'showActiveTodosButton';

describe('TodosActions', () => {
  it('should render TodosActions', () => {
    const {
      todosActionsElement,
      deleteAllTodosButton,
      resetCompletedTodosButton,
      showAllTodosButton,
      showCompletedTodosButton,
      showActiveTodosButton,
    } = setupTodosActions();

    [
      todosActionsElement,
      deleteAllTodosButton,
      showAllTodosButton,
      showCompletedTodosButton,
      showActiveTodosButton,
    ].forEach((element) => expect(element).toBeInTheDocument());
    expect(resetCompletedTodosButton).not.toBeDisabled();
  });

  it('should click delete all todos button', async () => {
    const { deleteAllTodos, deleteAllTodosButton } = setupTodosActions();

    await userEvent.click(deleteAllTodosButton);

    expect(deleteAllTodos).toHaveBeenCalledTimes(1);
  });

  it.each([
    { isNotDisabled: false, expected: 0},
    { isNotDisabled: true, expected: 1}
  ])('should click reset completed todos button if button is $isNotDisabled disabled',
    async ({ isNotDisabled, expected}) => {
      const { resetCompletedTodos, resetCompletedTodosButton } = setupTodosActions(isNotDisabled);

      await userEvent.click(resetCompletedTodosButton);

      expect(resetCompletedTodos).toHaveBeenCalledTimes(expected);
  })

  it.each([
    { activity: 'all', component: 'showAllTodosButton' },
    { activity: 'completed', component: 'showCompletedTodosButton' },
    { activity: 'active', component: 'showActiveTodosButton' },
  ] as Array<{activity: string; component: Buttons}>)(
    'should click show $activity todos button',
    async ({ component }) => {
      const helpers = setupTodosActions();
      await userEvent.click(helpers[component]);
      expect(helpers.setFilter).toHaveBeenCalledTimes(1);
    }
  );
})
