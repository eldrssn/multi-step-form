import { getEnding } from './';

describe('validate ending', () => {
  test('if value is true', () => {
    expect(getEnding(true)).toBe('yr');
  });

  test('if value is false', () => {
    expect(getEnding(false)).toBe('mo');
  });

  test('if no value', () => {
    expect(getEnding()).toBe('mo');
  });
});
