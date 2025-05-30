import { useTodo } from 'hooks/useTodo';
import { Title, TodoForm, TodoList, TodosActions } from 'components';
import s from './Main.module.scss';

export const Main = () => {
  const {
    filteredTodos,
    completedTodosCount,
    addTodo,
    deleteTodo,
    toggleTodo,
    deleteAllTodos,
    resetCompletedTodos,
    setFilter,
  } = useTodo();

  return (
    <div className={s.main}>
      <Title level={1} text={'Todo List'}/>
      <TodoForm addTodo={addTodo}/>
      <TodosActions
        deleteAllTodos={deleteAllTodos}
        resetCompletedTodos={resetCompletedTodos}
        setFilter={setFilter}
        completedTodosExist={!!completedTodosCount}/>
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleCompleteTodo={toggleTodo}/>
    </div>
  );
};
