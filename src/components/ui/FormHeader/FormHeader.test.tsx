import { render } from '@testing-library/react';
import { FormHeader } from './';

test('displays correct text data', () => {
  const { getByText, container } = render(
    <FormHeader title="Title" description="Description" />
  );

  expect(getByText('Title')).toBeInTheDocument();
  expect(getByText('Description')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
