import { RiTodoFill, RiDeleteBinLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { Todo } from 'types/Todo';
import s from './TodoItem.module.scss';

type TodoItemProps = {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleCompleteTodo: (id: string) => void;
}

export const TodoItem = ({todo, deleteTodo, toggleCompleteTodo}: TodoItemProps) => {
  return (
    <div className={`${s.todo} ${todo.completed ? s.todoCompleted : ''}`} data-testid='todoItem'>
      <div className={s.todoContent}>
        <RiTodoFill className={s.todoIcon}/>
        <h2 className={s.todoTitle}>{todo.title}</h2>
      </div>
      <div className={s.todoControl}>
        <FaCheck
          className={`${s.todoCompleteBtn} ${todo.completed ? s.todoCompleteBtnActive : ''}`}
          onClick={() => toggleCompleteTodo(todo.id)}
          data-testid='todoCompleteBtn'/>
        <RiDeleteBinLine
          className={s.todoDeleteBtn }
          onClick={() => deleteTodo(todo.id)}
          data-testid='todoDeleteBtn'/>
      </div>
    </div>
  )
}
