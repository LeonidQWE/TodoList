import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupTodoItem } from 'tests/helpers/setupTodoItem.utils';

describe ('TodoItem', () => {
  it('should render TodoItem', () => {
    setupTodoItem();

    const todoElement = screen.getByTestId('todoItem');
    const todoTitleElement = screen.getByText('Test todo');

    expect(todoElement).toBeInTheDocument();
    expect(todoTitleElement).toBeInTheDocument();
    expect(todoElement).toHaveClass('todo');
    expect(todoElement).not.toHaveClass('todoCompleted');
  });

  it('should render TodoItem with true completed', () => {
    setupTodoItem({ completed: true });

    const todoElement = screen.getByTestId('todoItem');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveClass('todoCompleted');
  })

  it('should click complete button', async () => {
    const { toggleTodo } = setupTodoItem();

    const todoCompleteBtn = screen.getByTestId('todoCompleteBtn');
    const todoElement = screen.getByTestId('todoItem');

    expect(todoCompleteBtn).toBeInTheDocument();
    expect(todoElement).not.toHaveClass('todoCompleted');

    await userEvent.click(todoCompleteBtn);

    expect(toggleTodo).toHaveBeenCalledTimes(1);
  });

  it('should click delete buttun', async () => {
    const { deleteTodo } = setupTodoItem();

    const todoDeleteBtn = screen.getByTestId('todoDeleteBtn');

    await userEvent.click(todoDeleteBtn);

    expect(deleteTodo).toHaveBeenCalledTimes(1);
  });
})
