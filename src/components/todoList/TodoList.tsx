import { TodoItem } from 'components';
import { Todo } from 'types/Todo';
import s from './TodoList.module.scss';

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleCompleteTodo: (id: string) => void;
}

export const TodoList = ({todos, deleteTodo, toggleCompleteTodo}: TodoListProps) => {
  return (
    <div className={s.todoList} data-testid='todoList'>
      {!todos.length && <p className={s.todoListEmpty}>Todo List is Empty</p>}
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleteTodo={toggleCompleteTodo}/>)}
    </div>
  )
}
