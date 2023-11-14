import { render } from '@testing-library/react';
import { AddOn } from './';

describe('AddOn', () => {
  test('if isChecked is true', () => {
    const { getByTestId, getByRole, container } = render(
      <AddOn
        addOn={{
          title: 'Title',
          description: 'Description',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        onChange={jest.fn()}
        isChecked={true}
        isYearly={true}
      />
    );

    const label = getByTestId('addon');
    expect(label).toHaveClass('checked');

    const checkboxInput = getByRole('checkbox');
    expect(checkboxInput).toHaveProperty('checked', true);
    expect(container).toMatchSnapshot();
  });

  test('if isChecked is false', () => {
    const { getByTestId, getByRole } = render(
      <AddOn
        addOn={{
          title: 'Title',
          description: 'Description',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        onChange={jest.fn()}
        isChecked={false}
        isYearly={true}
      />
    );

    const label = getByTestId('addon');
    expect(label).not.toHaveClass('checked');

    const checkboxInput = getByRole('checkbox');
    expect(checkboxInput).toHaveProperty('checked', false);
  });

  test('displays correct price based on isYearly is true', () => {
    const { getByText } = render(
      <AddOn
        addOn={{
          title: 'Title',
          description: 'Description',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        onChange={jest.fn()}
        isChecked={false}
        isYearly={true}
      />
    );

    const yearlyPrice = getByText('+$100/yr');
    expect(yearlyPrice).toBeInTheDocument();
  });

  test('displays correct price based on isYearly is false', () => {
    const { getByText } = render(
      <AddOn
        addOn={{
          title: 'Title',
          description: 'Description',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        onChange={jest.fn()}
        isChecked={false}
        isYearly={false}
      />
    );

    const monthlyPrice = getByText('+$10/mo');
    expect(monthlyPrice).toBeInTheDocument();
  });

  test('calls onChange when the checkbox is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <AddOn
        addOn={{
          title: 'Title',
          description: 'Description',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        onChange={onChangeMock}
        isChecked={false}
        isYearly={true}
      />
    );

    const checkboxInput = getByRole('checkbox');
    checkboxInput.click();

    expect(onChangeMock).toHaveBeenCalled();
  });

  test('displays correct text data', () => {
    const { getByText } = render(
      <AddOn
        addOn={{
          title: 'Title',
          description: 'Description',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        onChange={jest.fn()}
        isChecked={false}
        isYearly={true}
      />
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
  });
});
