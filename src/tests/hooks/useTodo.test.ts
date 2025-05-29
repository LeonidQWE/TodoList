import { renderHook, act } from "@testing-library/react"
import { useTodo } from "hooks/useTodo"

global.crypto.randomUUID = () => '123-123-123-123-354';

describe('useTodo', () => {
  it('should return an object with correct properties', () =>{
    const { result } = renderHook(useTodo);

    expect(result.current).toHaveProperty('todos');
    expect(result.current).toHaveProperty('addTodo');
    expect(result.current).toHaveProperty('deleteTodo');
    expect(result.current).toHaveProperty('toggleTodo')

    expect(typeof result.current.todos).toBe('object');
    expect(typeof result.current.addTodo).toBe('function');
    expect(typeof result.current.deleteTodo).toBe('function');
    expect(typeof result.current.toggleTodo).toBe('function');
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
  });

  it('should delete todo', () => {
    const todos = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const { result } = renderHook(() => useTodo(todos));

    expect(result.current.todos.length).toBe(3);

    act(() => {
      result.current.deleteTodo('1');
    });

    expect(result.current.todos.length).toBe(2);
  });

  it('should toggle todo', () => {
    const todos = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const { result } = renderHook(() => useTodo(todos));

    expect(result.current.todos[0].completed).toBe(false);
    expect(result.current.todos[1].completed).toBe(true);
    expect(result.current.todos[2].completed).toBe(false);

    act(() => {
      result.current.toggleTodo('1');
    })

    expect(result.current.todos[0].completed).toBe(true);
    expect(result.current.todos[1].completed).toBe(true);
    expect(result.current.todos[2].completed).toBe(false);
  });
});
