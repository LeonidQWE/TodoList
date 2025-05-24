import { TodoTask } from 'classes/TodoTask';

global.crypto.randomUUID = () => '123-123-123-123-354';

describe('TodoTask', () => {
  it('should create todo with title', () => {
    const todoTitle = 'Create Todo Project';
    const expectTodo = { id: '123-123-123-123-354', title: todoTitle, completed: false };

    const todo = new TodoTask(todoTitle);

    expect(todo).toEqual(expectTodo);
  })
});
