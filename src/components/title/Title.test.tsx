import { Title } from './Title';
import { render, screen } from '@testing-library/react';

describe('Title', () => {
  it('should render Title with correct props', () => {
    render(<Title level={1} text='Test title'/>)

    const titleElement = screen.getByText('Test title');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('title');
    expect(titleElement).toHaveTextContent('Test title');
    expect(titleElement.tagName).toBe('H1');
  });

  it('should render Title without props', () => {
    render(<Title level={1}/>)

    const titleElement = screen.getByTestId('title');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('No title');
    expect(titleElement.tagName).toBe('H1');
  });
})
