import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Form } from './Form';

describe('Form', () => {
  test('renders the form with TextInput and Button', () => {
    const { getByPlaceholderText, getByText, container } = render(
      <Form
        handleNext={jest.fn()}
        data={{ step1Data: null, step2Data: null, step3Data: null }}
      />
    );

    const name = getByPlaceholderText(/e.g. stephen king/i);
    const email = getByPlaceholderText(/e.g. stephenking@lorem.com/i);
    const phone = getByPlaceholderText('e.g. +1 234 567 890');
    const buttonElement = getByText(/next/i);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('submits the form with valid data', async () => {
    const handleNextMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <Form
        handleNext={handleNextMock}
        data={{ step1Data: null, step2Data: null, step3Data: null }}
      />
    );

    const user = userEvent.setup();

    await user.type(getByPlaceholderText(/e.g. stephen king/i), 'John Doe');
    await user.type(
      getByPlaceholderText(/e.g. stephenking@lorem.com/i),
      'john.doe@example.com'
    );
    await user.type(getByPlaceholderText('e.g. +1 234 567 890'), '1234567890');

    await user.click(getByText(/next/i));

    await waitFor(() => {
      expect(handleNextMock).toHaveBeenCalledWith({
        step1Data: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: 1234567890,
        },
      });
    });
  });

  test('submits the form with no name', async () => {
    const handleNextMock = jest.fn();
    const { getByPlaceholderText, getByText, findByText } = render(
      <Form
        handleNext={handleNextMock}
        data={{ step1Data: null, step2Data: null, step3Data: null }}
      />
    );

    const user = userEvent.setup();

    await user.type(
      getByPlaceholderText(/e.g. stephenking@lorem.com/i),
      'john.doe@example.com'
    );
    await user.type(getByPlaceholderText('e.g. +1 234 567 890'), '1234567890');

    await user.click(getByText(/next/i));

    await waitFor(async () => {
      expect(await findByText(/This field is required/i)).toBeInTheDocument();
      expect(handleNextMock).not.toBeCalled();
    });
  });

  test('submits the form with no valid email', async () => {
    const handleNextMock = jest.fn();
    const { getByPlaceholderText, getByText, findByText } = render(
      <Form
        handleNext={handleNextMock}
        data={{ step1Data: null, step2Data: null, step3Data: null }}
      />
    );

    const user = userEvent.setup();

    await user.type(getByPlaceholderText(/e.g. stephen king/i), 'John Doe');
    await user.type(
      getByPlaceholderText(/e.g. stephenking@lorem.com/i),
      'john.doe@example'
    );
    await user.type(getByPlaceholderText('e.g. +1 234 567 890'), '1234567890');

    await user.click(getByText(/next/i));

    await waitFor(async () => {
      expect(await findByText(/Invalid email address/i)).toBeInTheDocument();
      expect(handleNextMock).not.toBeCalled();
    });
  });

  test('submits the form with existing data', async () => {
    const { getByPlaceholderText } = render(
      <Form
        handleNext={jest.fn()}
        data={{
          step1Data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '1234567890',
          },
          step2Data: null,
          step3Data: null,
        }}
      />
    );

    expect(getByPlaceholderText(/e.g. stephen king/i)).toHaveValue('John Doe');
    expect(getByPlaceholderText(/e.g. stephenking@lorem.com/i)).toHaveValue(
      'john.doe@example.com'
    );
    expect(getByPlaceholderText('e.g. +1 234 567 890')).toHaveValue(1234567890);
  });
});
