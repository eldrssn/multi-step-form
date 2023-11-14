import { fireEvent, render, waitFor } from '@testing-library/react';
import { Step4 } from './Step4';

const data = {
  step1Data: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
  },
  step2Data: { selectedPlan: 'Pro', isYearly: false },
  step3Data: { profile: true },
};

const renderStep4 = (props = {}) => {
  const defaultProps = {
    handleBack: jest.fn(),
    data,
    ...props,
  };

  return render(<Step4 {...defaultProps} />);
};

describe('Step4', () => {
  test('renders Step4 component correctly', () => {
    const { getByText, getAllByText, queryByText } = renderStep4();

    expect(getByText('Finishing up')).toBeInTheDocument();
    expect(
      getByText('Double-check everything looks OK before confirming.')
    ).toBeInTheDocument();
    expect(queryByText('Total (per year)')).not.toBeInTheDocument();
    expect(getByText('Total (per month)')).toBeInTheDocument();
    expect(getAllByText('Change')).toHaveLength(1); 
  });

  test('clicking "Confirm" button calls handleConfirm and sets isSuccess to true', async () => {
    const { getByText, queryByText } = renderStep4();

    fireEvent.click(getByText('Confirm'));

    await waitFor(() => {
      expect(queryByText(/thank you!/i)).toBeInTheDocument();
    });
  });
});
