import { fireEvent, render } from '@testing-library/react';
import { Switcher } from './';

describe('correct display Switcher when switching', () => {
  test('if position is off', () => {
    const { getByRole, container } = render(
      <Switcher isChecked={false} handleToggle={() => {}} />
    );

    expect(getByRole('checkbox')).not.toHaveAttribute('checked');
    expect(container).toMatchSnapshot();
  });

  test('if position is on', () => {
    const { getByRole } = render(
      <Switcher isChecked={true} handleToggle={() => {}} />
    );

    expect(getByRole('checkbox')).toHaveAttribute('checked');
  });

  test('if switcher is clicked', () => {
    const handleToggleMocked = jest.fn();

    const { getByRole } = render(
      <Switcher isChecked={true} handleToggle={handleToggleMocked} />
    );

    const switcher = getByRole('checkbox');
    fireEvent.click(switcher);
    expect(handleToggleMocked).toBeCalledTimes(1);
  });
});
