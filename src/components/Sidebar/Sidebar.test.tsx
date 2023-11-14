import { render } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { steps } from './constants';

describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    const { container } = render(<Sidebar />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders all steps in Sidebar', () => {
    const { getByText } = render(<Sidebar />);

    steps.forEach((step) => {
      expect(getByText(step.title)).toBeInTheDocument();
    });
  });
});
