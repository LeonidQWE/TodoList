import { renderHook, act } from "@testing-library/react"
import { useTodo } from "hooks/useTodo"

global.crypto.randomUUID = () => '123-123-123-123-354';

describe('useTodo', () => {
  it('should return an object with correct properties', () =>{
    const { result } = renderHook(useTodo);

    expect(result.current).toHaveProperty('filteredTodos');
    expect(result.current).toHaveProperty('completedTodosCount');
    expect(result.current).toHaveProperty('addTodo');
    expect(result.current).toHaveProperty('deleteTodo');
    expect(result.current).toHaveProperty('toggleTodo');
    expect(result.current).toHaveProperty('setFilter');
    expect(result.current).toHaveProperty('deleteAllTodos');
    expect(result.current).toHaveProperty('resetCompletedTodos');

    expect(typeof result.current.filteredTodos).toBe('object');
    expect(typeof result.current.completedTodosCount).toBe('number');
    expect(typeof result.current.addTodo).toBe('function');
    expect(typeof result.current.deleteTodo).toBe('function');
    expect(typeof result.current.toggleTodo).toBe('function');
    expect(typeof result.current.setFilter).toBe('function');
    expect(typeof result.current.deleteAllTodos).toBe('function');
    expect(typeof result.current.resetCompletedTodos).toBe('function');
  });

  it('should add todo with correct title', () => {
    const { result } = renderHook(useTodo);
    expect(result.current.filteredTodos.length).toBe(0);

    act(() => {
      result.current.addTodo('Create Todo Project');
    });

    expect(result.current.filteredTodos.length).toBe(1);
    expect(result.current.filteredTodos[0].title).toBe('Create Todo Project');
  });

  it('should not add todo with empty title', () => {
    const { result } = renderHook(useTodo);

    expect(result.current.filteredTodos.length).toBe(0);

    act(() => {
      result.current.addTodo('');
    });

    expect(result.current.filteredTodos.length).toBe(0);
  });

  it('should delete todo', () => {
    const filteredTodos = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const { result } = renderHook(() => useTodo(filteredTodos));

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.deleteTodo('1');
    });

    expect(result.current.filteredTodos.length).toBe(2);
  });

  it('should toggle todo', () => {
    const filteredTodos = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const { result } = renderHook(() => useTodo(filteredTodos));

    expect(result.current.filteredTodos[0].completed).toBe(false);
    expect(result.current.filteredTodos[1].completed).toBe(true);
    expect(result.current.filteredTodos[2].completed).toBe(false);

    act(() => {
      result.current.toggleTodo('1');
    })

    expect(result.current.filteredTodos[0].completed).toBe(true);
    expect(result.current.filteredTodos[1].completed).toBe(true);
    expect(result.current.filteredTodos[2].completed).toBe(false);
  });

  it('should delete all todos', () => {
    const filteredTodos = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const { result } = renderHook(() => useTodo(filteredTodos));

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.deleteAllTodos();
    });

    expect(result.current.filteredTodos.length).toBe(0);
  });

  it('should delete completed todos', () => {
    const filteredTodos = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const { result } = renderHook(() => useTodo(filteredTodos));

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.resetCompletedTodos();
    });

    expect(result.current.filteredTodos.length).toBe(2);
  });

  it('should show active todos', () => {
    const filteredTodos = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const { result } = renderHook(() => useTodo(filteredTodos));

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.setFilter('active');
    });

    expect(result.current.filteredTodos.length).toBe(2);
  });

  it('should show completed todos', () => {
    const filteredTodos = [
      {id: '1', title: 'Test todo', completed: false},
      {id: '2', title: 'Test todo 2', completed: true},
      {id: '3', title: 'Test todo 3', completed: false},
    ];

    const { result } = renderHook(() => useTodo(filteredTodos));

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.setFilter('completed');
    });

    expect(result.current.filteredTodos.length).toBe(1);
  });
});
