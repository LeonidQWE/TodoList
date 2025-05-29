import { useTodo } from 'hooks/useTodo';
import { Title, TodoForm, TodoList } from 'components';
import s from './Main.module.scss';

export const Main = () => {
  const { todos, addTodo, deleteTodo, toggleTodo} = useTodo();

  return (
    <div className={s.main}>
      <Title level={1} text={'Todo List'}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleteTodo={toggleTodo}/>
    </div>
  );
};
