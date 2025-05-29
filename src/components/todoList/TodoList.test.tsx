import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';
import { Todo } from 'types/Todo';

describe('TodoList', () => {
  it('should render TodoList with todos', () => {
    const todos: Todo[] = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const deleteTodo = jest.fn();
    const toggleCompleteTodo = jest.fn();

    render(<TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleteTodo={toggleCompleteTodo}/>);

    const todoListElement = screen.getByTestId('todoList');
    const todoItemOneElement = screen.getByText('Test todo');
    const todoItemTwoElement = screen.getByText('Test todo 2');
    const todoItemThreeElement = screen.getByText('Test todo 3');

    expect(todoListElement).toBeInTheDocument();
    expect(todoItemOneElement).toBeInTheDocument();
    expect(todoItemTwoElement).toBeInTheDocument();
    expect(todoItemThreeElement).toBeInTheDocument();
    expect(todoListElement).toHaveClass('todoList');
  });

  it('should render TodoList without todos', () => {
    const todos: Todo[] = [];
    const deleteTodo = jest.fn();
    const toggleCompleteTodo = jest.fn();

    render(<TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleteTodo={toggleCompleteTodo}/>);

    const todoListElement = screen.getByTestId('todoList');
    const todoListEmptyElement = screen.getByText('Todo List is Empty');

    expect(todoListElement).toBeInTheDocument();
    expect(todoListEmptyElement).toBeInTheDocument();
    expect(todoListElement).toHaveClass('todoList');
    expect(todoListEmptyElement).toHaveClass('todoListEmpty');
  })
})
