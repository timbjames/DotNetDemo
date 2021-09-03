import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { MemoryRouter as Router } from 'react-router-dom';

import App from './App';
import { routes } from '@pages/routes';

describe('app functions accordingly', () => {

  test('renders main nav', () => {
    render(<Router><App /></Router>);
    const navElement = screen.getByRole('navigation', { name: 'main' });
    expect(navElement).toBeInTheDocument();
  });

  test('navigation home works', async () => {

    render(<Router><App /></Router>);

    await act(async () => {
      const goHomeLink = await screen.findByText(routes.home.linkText);

      fireEvent.click(goHomeLink);
    });

    const pageTitle = screen.getByRole('heading', { name: 'Welcome!' }) as HTMLHeadingElement;
    expect(document.body).toContainElement(pageTitle);
  });

  test('navigation to people works', async () => {
    render(<Router><App /></Router>);

    await act(async () => {
      const goToPeopleLink = await screen.findByText(routes.people.linkText);

      fireEvent.click(goToPeopleLink);
    });

    const pageTitle = screen.getByRole('heading', { name: 'People' }) as HTMLHeadingElement;
    expect(document.body).toContainElement(pageTitle);
  });

  test('navigation to cars works', async () => {
    render(<Router><App /></Router>);

    await act(async () => {
      const goToPeopleLink = await screen.findByText(routes.cars.linkText);

      fireEvent.click(goToPeopleLink);
    });

    const pageTitle = screen.getByRole('heading', { name: 'Cars' }) as HTMLHeadingElement;
    expect(document.body).toContainElement(pageTitle);
  });
});