import { render, screen } from '@testing-library/react';
import { CommonField } from './commonField';
import userEvent from '@testing-library/user-event';

describe('CommonField', () => {
  it('should render CommonField with placeholder', () => {
    render(<CommonField placeholder='Test placeholder'/>);

    const inputElement = screen.getByTestId('commonField');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('commonField');
    expect(inputElement).toHaveAttribute('placeholder', 'Test placeholder');
    expect(inputElement).toHaveAttribute('type', 'text');
  })

  it('should render CommonField with type', () => {
    render(<CommonField type='password'/>);

    const inputElement = screen.getByTestId('commonField');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('commonField');
    expect(inputElement).toHaveAttribute('type', 'password');
    expect(inputElement).not.toHaveAttribute('placeholder', '');
  })

  it('should change input value', async () => {
    const onChange = jest.fn();

    render(<CommonField setValue={onChange} value='Test value'/>);

    const inputElement = screen.getByTestId('commonField');

    await userEvent.type(inputElement, 'New value');

    expect(onChange).toHaveBeenCalledTimes(9);
  })
})
