import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('Main', () => {
  it('should render Main', () => {
    render(<Main />);
  })

  it('should render Main with class', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveClass('main');
  })

  it('should render Main with title', () => {
    render(<Main />);

    expect(screen.getByText('Todo List')).toBeInTheDocument();
  })
});
