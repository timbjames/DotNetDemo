import React from 'react';
import { render, screen } from '@testing-library/react';

import { PersonList } from '../list.component';

test('renders person list empty', () => {
    render(<PersonList />);
    const navElement = screen.getByRole('navigation', { name: 'main' });
    expect(navElement).toBeInTheDocument();
});