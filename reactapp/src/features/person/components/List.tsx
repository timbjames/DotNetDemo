import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { IApiPerson, IApiSearchResult } from '../interfaces/interfaces';

import PeopleService from '../services/person.service';

interface IPersonListProps {
    isSearch: boolean;
}

const PersonList: React.FC<IPersonListProps> = ({ isSearch }) => {

    const [people, setPeople] = useState([] as IApiPerson[]);

    useEffect(() => {

        if (isSearch){
            PeopleService.searchPeople().then((response: AxiosResponse<IApiSearchResult>) => {
                setPeople(response.data.results);
            });
        } else {
            PeopleService.getPeople().then((response: AxiosResponse<IApiPerson[]>) => {
                setPeople(response.data);
            });
        }
    }, [isSearch]);

    return (
        <div>
            List of people { isSearch && '"filtered"' }

            {
                people && people.map(x => {
                    return (
                        <h2>{x.name}</h2>
                    )
                })
            }
        </div>
    );
};

export {
    PersonList
}