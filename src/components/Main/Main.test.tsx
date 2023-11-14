import { render } from '@testing-library/react';
import { Main } from './';

test('initial step state is 1', () => {
  const { getByText, container } = render(<Main />);
  const initialStepText = getByText('Step 1');
  expect(initialStepText).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
