import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import MainNavigation from '@pages/navigation/navigation.component';

describe('site navigation', () => {

    it('should render correctly', () => {
        // TODOxTJ: Look into a nicer way for handling the wrapping components.
        const { getByRole } = render(<Router><MainNavigation /></Router>);
        const nav = getByRole('navigation', { name: 'main' }) as HTMLElement;

        expect(nav).toBeTruthy();
    });
});