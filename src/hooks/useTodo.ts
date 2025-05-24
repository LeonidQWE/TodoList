import { useState } from 'react';
import { TodoTask } from 'classes/TodoTask';
import { Todo } from 'types/Todo';

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (!text) return;
    const newTodo: Todo = new TodoTask(text);
    setTodos([...todos, newTodo]);
  }

  return { todos, addTodo };
};
