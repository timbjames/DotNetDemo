import React from 'react';

import { PersonList } from '@features/person/list.component';

const People: React.FC = () => {
    return (
        <div>
            <h1>People</h1>

            <PersonList />
        </div>
    );
};

export default People;