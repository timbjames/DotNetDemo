import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '@features/car/details.component';

test('renders', () => {
  render(<Details />);
  const headerElement = screen.getByText(/Hi/i);
  expect(headerElement).toBeInTheDocument();
});