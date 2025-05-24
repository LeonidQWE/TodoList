import { renderHook, act } from "@testing-library/react"
import { useTodo } from "hooks/useTodo"

global.crypto.randomUUID = () => '123-123-123-123-354';

describe('useTodo', () => {
  it('should return an object with correct properties', () =>{
    const { result } = renderHook(useTodo);

    expect(result.current).toHaveProperty('todos');
    expect(result.current).toHaveProperty('addTodo');

    expect(typeof result.current.todos).toBe('object');
    expect(typeof result.current.addTodo).toBe('function');
  });

  it('should add todo with correct title', () => {
  const { result } = renderHook(useTodo);
  expect(result.current.todos.length).toBe(0);

  act(() => {
    result.current.addTodo('Create Todo Project');
  });

  expect(result.current.todos.length).toBe(1);
  expect(result.current.todos[0].title).toBe('Create Todo Project');
});

  it('should not add todo with empty title', () => {
    const { result } = renderHook(useTodo);

    expect(result.current.todos.length).toBe(0);

    act(() => {
      result.current.addTodo('');
    });

    expect(result.current.todos.length).toBe(0);
  })
});
