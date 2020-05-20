import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders proper text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText((content, element) => element.tagName.toLowerCase() === 'p' && content.startsWith('Test'));

  expect(linkElement).toBeInTheDocument();
});
