import React from 'react';
import { Route, Switch } from 'react-router-dom';

import People from '@pages/people/people.page';
import Cars from '@pages/car/car.page';
import { routes } from '@pages/routes';

import ReactFlow from 'react-flow-renderer';

const PageRoot: React.FC = () => {

    const elements = [
        {id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 }},
        { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
        { id: 'e1-2', source: '1', target: '2', animated: true }
    ];

    return (
        <Switch>
            <Route path={routes.people.url}>
                <People />
            </Route>
            <Route path={routes.cars.url}>
                <Cars />
            </Route>
            <Route path={routes.home.url}>
                <>
                <h1>Welcome!</h1>
                <div style={{ backgroundColor: '#ccc', height: 500 }}>
                    <ReactFlow elements={elements} />
                </div>
                </>
            </Route>
        </Switch>
    );
}

export default PageRoot;