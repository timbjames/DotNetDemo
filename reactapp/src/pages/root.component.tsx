import React from 'react';
import { Route, Switch } from 'react-router-dom';

import People from '@pages/people/people.page';
import Cars from '@pages/car/car.page';
import { routes } from '@pages/routes';

const PageRoot: React.FC = () => {

    return (
        <Switch>
            <Route path={routes.people.url}>
                <People />
            </Route>
            <Route path={routes.cars.url}>
                <Cars />
            </Route>
            <Route path={routes.home.url}>
                <h1>Welcome!</h1>
            </Route>
        </Switch>
    );
}

export default PageRoot;