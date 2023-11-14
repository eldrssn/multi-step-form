import { render, screen } from '@testing-library/react';
import { Step } from '.';

describe('title and step is correct', () => {
  test('title matches', () => {
    const { container } = render(
      <Step step={{ number: 1, title: 'Title' }} isActive={false} />
    );
    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('step matches', () => {
    render(<Step step={{ number: 1, title: 'Title' }} isActive={false} />);
    const steps = screen.getAllByText(/1/i);
    expect(steps).toHaveLength(2);
    const titleStep = screen.getByText(/step/i);
    expect(titleStep).toContainHTML('Step 1');
  });
});

describe('style isActive is correct', () => {
  test('when isActive is true', () => {
    render(<Step step={{ number: 1, title: 'Title' }} isActive={true} />);
    const boxElement = screen.getByText(/title/i).closest('.box_active');
    expect(boxElement).toBeInTheDocument();
  });

  test('when isActive is false', () => {
    render(<Step step={{ number: 1, title: 'Title' }} isActive={false} />);
    const boxElement = screen.getByText(/title/i).closest('.box_active');
    expect(boxElement).toBeNull();
  });
});
