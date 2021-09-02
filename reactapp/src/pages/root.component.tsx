import Details from '@features/car/details.component';
import { PersonList } from '@features/person/list.component';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const PageRoot: React.FC = () => {

    return (
        <Switch>
            <Route path="/tutorials">
                <PersonList />
            </Route>
            <Route path="/add">
                <Details />
            </Route>
        </Switch>
    );
}

export default PageRoot;