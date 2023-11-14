import { fireEvent, render, waitFor } from '@testing-library/react';
import { Step2 } from './Step2';

const renderStep2 = (props = {}) => {
  const defaultProps = {
    handleNext: jest.fn(),
    handleBack: jest.fn(),
    data: { step1Data: null, step2Data: null, step3Data: null },
    ...props,
  };

  return render(<Step2 {...defaultProps} />);
};

describe('Step2', () => {
  test('renders Step2 component correctly', () => {
    const { getByText, container } = renderStep2();

    expect(getByText('Select your plan')).toBeInTheDocument();
    expect(
      getByText('You have the option of monthly or yearly billing.')
    ).toBeInTheDocument();
    expect(getByText('Monthly')).toBeInTheDocument();
    expect(getByText('Yearly')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  const mockHandleNext = jest.fn();

  test('selecting a plan updates state and calls handleNext', async () => {
    const { getAllByTestId, getByText } = renderStep2({
      handleNext: mockHandleNext,
    });

    const plans = getAllByTestId('plan');
    fireEvent.click(plans[0]);
    fireEvent.submit(getByText('Next Step'));

    await waitFor(() => {
      expect(plans[0]).toHaveClass('checked');
      expect(mockHandleNext).toHaveBeenCalledWith(
        expect.objectContaining({
          step2Data: { selectedPlan: 'Arcade', isYearly: false },
        })
      );
    });
  });

  test('checking if special offer exists', () => {
    const { getAllByText } = renderStep2({
      data: {
        step1Data: null,
        step2Data: { selectedPlan: 'Arcade', isYearly: true },
        step3Data: null,
      },
    });

    expect(getAllByText(/2 months free/i)).toHaveLength(3);
  });

  test('checking if special offer no exists', () => {
    const { queryByText } = renderStep2({
      data: {
        step1Data: null,
        step2Data: { selectedPlan: 'Arcade', isYearly: false },
        step3Data: null,
      },
    });

    expect(queryByText(/2 months free/i)).not.toBeInTheDocument();
  });
});
