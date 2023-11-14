import { fireEvent, render, waitFor } from '@testing-library/react';
import { TextInput } from './';
import { Formik } from 'formik';

test('Input', async () => {
  const { getByPlaceholderText, container } = render(
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <TextInput
        input={{
          type: 'text',
          name: 'name',
          label: 'Name',
          placeholder: 'Enter your name',
        }}
      />
    </Formik>
  );

  const input = getByPlaceholderText(/Enter your name/i);
  fireEvent.change(input, { target: { value: 'Jane' } });
  fireEvent.blur(input);

  await waitFor(() => {
    expect(input).toHaveValue('Jane');
    expect(container).toMatchSnapshot();
  });
});
