import { Todo } from "types/Todo";

export class TodoTask implements Todo {
  readonly id: string;
  title: string;
  completed: boolean;

  constructor (title: string) {
    this.id = crypto.randomUUID()
    this.title = title
    this.completed = false
  }
}
