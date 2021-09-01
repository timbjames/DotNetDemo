import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main nav', () => {
  render(<App />);
  const navElement = screen.getByRole('navigation', { name: 'main' });
  expect(navElement).toBeInTheDocument();
});

// test('renders footer nav', () => {
//   render(<App />);
//   const navElement = screen.getByRole('navigation', { name: 'footer' });
//   expect(navElement).toBeInTheDocument();
// });