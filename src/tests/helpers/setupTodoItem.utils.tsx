import { render } from '@testing-library/react';
import { TodoItem } from 'components';

export const setupTodoItem = (overrides = {}) => {
  const todo = { id: '1', title: 'Test todo', completed: false, ...overrides };
  const deleteTodo = jest.fn();
  const toggleTodo = jest.fn();

  render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleCompleteTodo={toggleTodo}/>)

  return { todo, deleteTodo, toggleTodo };
}
