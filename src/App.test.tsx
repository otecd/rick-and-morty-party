import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders proper elements', () => {
  const { getByText } = render(<App />);
  const el = getByText((_, element) => element.tagName.toLowerCase() === 'input');

  expect(el).toBeInTheDocument();
});
