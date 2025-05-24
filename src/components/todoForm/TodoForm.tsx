import { useState } from 'react';
import s from './TodoForm.module.scss';
import { CommonField } from 'components/commonField/commonField';

type TodoFormProps = {
  addTodo: (text: string) => void
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [todoTask, setTodoTask] = useState('');

  const handleSubmitTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(todoTask);
    setTodoTask('');
  }

  return (
    <form data-testid='todoForm' className={s.todoForm} onSubmit={handleSubmitTodo}>
        <CommonField
          type='text'
          value={todoTask}
          setValue={setTodoTask}
          placeholder='Enter New Todo'/>
      <button type="submit" className={s.todoFormSubmit}>Submit</button>
    </form>
  )
}
