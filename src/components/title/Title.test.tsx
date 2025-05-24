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
    render(<Title/>)

    const titleElement = screen.getByTestId('title');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('No title');
    expect(titleElement.tagName).toBe('H1');
  });

  it.each<{level?: 1 | 2 | 3 | 4 | 5 | 6 | undefined, expected: string}>([
    {level: 1, expected: 'H1'},
    {level: 2, expected: 'H2'},
    {level: 3, expected: 'H3'},
    {level: 4, expected: 'H4'},
    {level: 5, expected: 'H5'},
    {level: 6, expected: 'H6'},
    {expected: 'H1'},
  ])('should render Title with level $level', ({level, expected}) => {
    render(<Title level={level} text='Test title'/>);

    const titleElement = screen.getByTestId('title');

    expect(titleElement.tagName).toBe(expected);
  });
})
