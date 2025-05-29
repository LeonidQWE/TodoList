import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import userEvent from '@testing-library/user-event';

describe ('TodoItem', () => {
  it('should render TodoItem', () => {
    const todo = { id: '1', title: 'Test todo', completed: false };
    const deleteTodo = jest.fn();
    const toggleTodo = jest.fn();

    render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleCompleteTodo={toggleTodo}/>)

    const todoElement = screen.getByTestId('todoItem');
    const todoTitleElement = screen.getByText('Test todo');

    expect(todoElement).toBeInTheDocument();
    expect(todoTitleElement).toBeInTheDocument();
    expect(todoElement).toHaveClass('todo');
    expect(todoElement).not.toHaveClass('todoCompleted');
  });

  it('should render TodoItem with true completed', () => {
    const todo = { id: '1', title: 'Test todo', completed: true };
    const deleteTodo = jest.fn();
    const toggleTodo = jest.fn();

    render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleCompleteTodo={toggleTodo}/>)

    const todoElement = screen.getByTestId('todoItem');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveClass('todoCompleted');
  })

  it('should click complete button', async () => {
    const todo = { id: '1', title: 'Test todo', completed: false };
    const deleteTodo = jest.fn();
    const toggleTofo = jest.fn();

    render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleCompleteTodo={toggleTofo}/>)

    const todoCompleteBtn = screen.getByTestId('todoCompleteBtn');
    const todoElement = screen.getByTestId('todoItem');

    expect(todoCompleteBtn).toBeInTheDocument();
    expect(todoElement).not.toHaveClass('todoCompleted');

    await userEvent.click(todoCompleteBtn);
    
    expect(toggleTofo).toHaveBeenCalledTimes(1);
  });

  it('should click delete buttun', async () => {
    const todo = { id: '1', title: 'Test todo', completed: false };
    const deleteTodo = jest.fn();
    const toggleTodo = jest.fn();

    render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleCompleteTodo={toggleTodo}/>);

    const todoDeleteBtn = screen.getByTestId('todoDeleteBtn');

    await userEvent.click(todoDeleteBtn);

    expect(deleteTodo).toHaveBeenCalledTimes(1);
  });
})
