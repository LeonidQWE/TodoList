import { render, screen, fireEvent } from "@testing-library/react"
import { TodoForm } from "./TodoForm";

describe('TodoForm', () => {
  it('should submit form with text', () => {
    const onSubmit = jest.fn();

    render(<TodoForm addTodo={onSubmit}/>)

    const formElement = screen.getByTestId('todoForm');

    expect(formElement).toBeInTheDocument();

    fireEvent.submit(formElement);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
})
