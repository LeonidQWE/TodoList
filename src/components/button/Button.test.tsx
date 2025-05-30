import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe('Button', () => {
  it('should render Button component with props', () => {
    const onClick = jest.fn();
    const title = 'Test button';

    render(<Button onClick={onClick} title={title} disabled={true}>Click me</Button>);

    const buttonElement = screen.getByTestId('btn');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).toHaveTextContent('Click me');
    expect(buttonElement).toHaveAttribute('title', title);
    expect(buttonElement).toBeDisabled();
  });

  it('should render Button component without disabled prop', () => {
    const onClick = jest.fn();
    const title = 'Test button';

    render(<Button onClick={onClick} title={title}>Click me</Button>);

    const buttonElement = screen.getByTestId('btn');

    expect(buttonElement).not.toBeDisabled();
  });

  it('should click button', async () => {
    const onClick = jest.fn();
    const title = 'Test button';

    render(<Button onClick={onClick} title={title}>Click me</Button>);

    const buttonElement = screen.getByTestId('btn');

    await userEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
})
