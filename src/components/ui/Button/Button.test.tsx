import { fireEvent, render } from '@testing-library/react';
import { Button } from './';

describe('Actions of Button', () => {
  test('if action is next', () => {
    const { getByText, container } = render(<Button action="next" />);
    const button = getByText(/next step/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button_next');
    expect(container).toMatchSnapshot();
  });

  test('if action is back', () => {
    const { getByText } = render(<Button action="back" />);
    const button = getByText(/go back/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button_back');
  });

  test('if action is confirm', () => {
    const { getByText } = render(<Button action="confirm" />);
    const button = getByText(/confirm/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button_confirm');
  });
});

describe('Types of Button', () => {
  test('has no type in props', () => {
    const { getByText } = render(<Button action="next" />);
    const button = getByText(/next step/i);
    expect(button).toHaveAttribute('type', 'button');
  });

  test('has submit type on props', () => {
    const { getByText } = render(<Button action="next" type="submit" />);
    const button = getByText(/next step/i);
    expect(button).toHaveAttribute('type', 'submit');
  });
});

test('if Button is clicked', () => {
  const onClickMocked = jest.fn();
  const { getByText } = render(
    <Button action="next" onClick={onClickMocked} />
  );
  const button = getByText(/next step/i);

  fireEvent.click(button);
  expect(onClickMocked).toHaveBeenCalled();
});
