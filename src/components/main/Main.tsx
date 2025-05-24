import { useTodo } from 'hooks/useTodo';
import { Title, TodoForm } from 'components';
import s from './Main.module.scss';

export const Main = () => {
  const { todos, addTodo} = useTodo();
  console.log(todos);

  return (
    <div className={s.main}>
      <Title level={1} text={'Todo List'}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
};
