import { renderHook, act } from '@testing-library/react';
import { useTodo } from 'hooks/useTodo';
import { Todo } from 'types/Todo';

global.crypto.randomUUID = () => '123-123-123-123-354';

const setup = (todos: Todo[] = []) => renderHook(() => useTodo(todos));

const sampleTodos = [
  {id: '1', title: 'Test todo', completed: false},
  {id: '2', title: 'Test todo 2', completed: true},
  {id: '3', title: 'Test todo 3', completed: false},
];

describe('useTodo', () => {
  it('should return an object with correct properties', () =>{
    const { result } = setup();
    const todoApi = result.current;
    const functionProp = [
      'addTodo',
      'deleteTodo',
      'toggleTodo',
      'setFilter',
      'deleteAllTodos',
      'resetCompletedTodos',
    ] as const;

    [
      'filteredTodos',
      'completedTodosCount',
      'addTodo',
      'deleteTodo',
      'toggleTodo',
      'setFilter',
      'deleteAllTodos',
      'resetCompletedTodos',
    ].forEach((prop) => expect(todoApi).toHaveProperty(prop));

    expect(Array.isArray(todoApi.filteredTodos)).toBe(true);
    expect(typeof todoApi.completedTodosCount).toBe('number');
    functionProp.forEach((prop) => expect(typeof todoApi[prop]).toBe('function'));
  });

  it('should add todo with correct title', () => {
    const { result } = setup();
    expect(result.current.filteredTodos.length).toBe(0);

    act(() => {
      result.current.addTodo('Create Todo Project');
    });

    expect(result.current.filteredTodos.length).toBe(1);
    expect(result.current.filteredTodos[0].title).toBe('Create Todo Project');
  });

  it('should not add todo with empty title', () => {
    const { result } = setup();

    expect(result.current.filteredTodos.length).toBe(0);

    act(() => {
      result.current.addTodo('');
    });

    expect(result.current.filteredTodos.length).toBe(0);
  });

  it('should delete todo', () => {
    const { result } = setup(sampleTodos);

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.deleteTodo('1');
    });

    expect(result.current.filteredTodos.map((todo) => todo.id)).toEqual(['2', '3']);
  });

  it('should toggle todo', () => {
    const { result } = setup(sampleTodos);

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
    const { result } = setup(sampleTodos);

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.deleteAllTodos();
    });

    expect(result.current.filteredTodos.length).toBe(0);
  });

  it('should delete completed todos', () => {
    const { result } = setup(sampleTodos);

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.resetCompletedTodos();
    });

    expect(result.current.filteredTodos.length).toBe(2);
  });

  it('should show active todos', () => {
    const { result } = setup(sampleTodos);

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.setFilter('active');
    });

    expect(result.current.filteredTodos.length).toBe(2);
  });

  it('should show completed todos', () => {
    const { result } = setup(sampleTodos);

    expect(result.current.filteredTodos.length).toBe(3);

    act(() => {
      result.current.setFilter('completed');
    });

    expect(result.current.filteredTodos.length).toBe(1);
  });
});
