import { render } from '@testing-library/react';
import { Plan } from './';

describe('checking the plan display when selecting', () => {
  test('if it is checked', () => {
    const { getByTestId, getByRole, container } = render(
      <Plan
        plan={{
          title: 'Title',
          icon: 'src/icon.svg',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        isChecked={true}
        isYearly={true}
        handlePlanChange={jest.fn()}
      />
    );

    const label = getByTestId('plan');
    expect(label).toHaveClass('checked');

    const radioboxInput = getByRole('radio');
    expect(radioboxInput).toHaveProperty('checked', true);
    expect(container).toMatchSnapshot();
  });

  test('if it isnt checked', () => {
    const { getByTestId, getByRole } = render(
      <Plan
        plan={{
          title: 'Title',
          icon: 'src/icon.svg',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        isChecked={false}
        isYearly={true}
        handlePlanChange={jest.fn()}
      />
    );

    const label = getByTestId('plan');
    expect(label).not.toHaveClass('checked');

    const radioboxInput = getByRole('radio');
    expect(radioboxInput).toHaveProperty('checked', false);
  });
});

describe('correct display plan yearly or monthly', () => {
  test('displays correct yearly price', () => {
    const { getByText } = render(
      <Plan
        plan={{
          title: 'Title',
          icon: 'src/icon.svg',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        isChecked={false}
        isYearly={true}
        handlePlanChange={jest.fn()}
      />
    );

    const yearlyPrice = getByText('$100/yr');
    expect(yearlyPrice).toBeInTheDocument();

    const additionalOffer = getByText(/2 months free/i);
    expect(additionalOffer).toBeInTheDocument();
  });

  test('displays correct monthly price', () => {
    const { getByText, queryByText } = render(
      <Plan
        plan={{
          title: 'Title',
          icon: 'src/icon.svg',
          priceYearly: '100',
          priceMonthly: '10',
        }}
        isChecked={false}
        isYearly={false}
        handlePlanChange={jest.fn()}
      />
    );

    const monthlyPrice = getByText('$10/mo');
    expect(monthlyPrice).toBeInTheDocument();

    const additionalOffer = queryByText(/2 months free/i);
    expect(additionalOffer).not.toBeInTheDocument();
  });
});

test('if plan is clicked', () => {
  const handlePlanChangeMock = jest.fn();
  const { getByRole } = render(
    <Plan
      plan={{
        title: 'Title',
        icon: 'src/icon.svg',
        priceYearly: '100',
        priceMonthly: '10',
      }}
      isChecked={false}
      isYearly={false}
      handlePlanChange={handlePlanChangeMock}
    />
  );

  const radioboxInput = getByRole('radio');
  radioboxInput.click();

  expect(handlePlanChangeMock).toHaveBeenCalled();
});
