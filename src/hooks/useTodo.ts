import { useState } from 'react';
import { TodoTask } from 'classes/TodoTask';
import { Todo } from 'types/Todo';

export const useTodo = (initialTodos: Todo[] = []) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text: string) => {
    if (!text) return;
    const newTodo: Todo = new TodoTask(text);
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  return { todos, addTodo, deleteTodo, toggleTodo };
};
