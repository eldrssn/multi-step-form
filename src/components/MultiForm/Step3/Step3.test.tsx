import { fireEvent, render } from '@testing-library/react';
import { Step3 } from './Step3';

const renderStep3 = (props = {}) => {
  const defaultProps = {
    handleNext: jest.fn(),
    handleBack: jest.fn(),
    data: { step1Data: null, step2Data: null, step3Data: null },
    ...props,
  };

  return render(<Step3 {...defaultProps} />);
};

describe('Step3', () => {
  test('renders Step3 component correctly', () => {
    const { getByText, getAllByTestId, container } = renderStep3();

    expect(getByText('Pick add-ons')).toBeInTheDocument();
    expect(
      getByText('Add-ons help enhance your gaming experience.')
    ).toBeInTheDocument();
    expect(getAllByTestId('addon')).toHaveLength(3);
    expect(container).toMatchSnapshot();
  });

  test('selecting an add-on updates state', () => {
    const { getAllByTestId } = renderStep3();

    const addonCheckbox = getAllByTestId('addon')[1];
    fireEvent.click(addonCheckbox);

    expect(addonCheckbox).toHaveClass('checked');
  });

  test('submits the form with selected add-ons', async () => {
    const handleNextMock = jest.fn();
    const { getAllByTestId, getByText } = renderStep3({
      handleNext: handleNextMock,
    });

    const addonCheckbox = getAllByTestId('addon')[0];
    fireEvent.click(addonCheckbox);

    fireEvent.click(getByText(/next step/i));

    expect(handleNextMock).toHaveBeenCalledWith({
      step3Data: {
        service: true,
      },
    });
  });

  test('clicking "Back" button calls handleBack', () => {
    const handleBackMock = jest.fn();
    const { getByText } = renderStep3({ handleBack: handleBackMock });

    fireEvent.click(getByText(/Go Back/i));

    expect(handleBackMock).toHaveBeenCalled();
  });
});
