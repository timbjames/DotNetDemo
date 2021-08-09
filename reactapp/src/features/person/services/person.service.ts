import { AxiosResponse } from 'axios';

import http from '../../../common/http-client';
import { IApiPeopleTools, IApiPerson, IApiSearchResult } from '../interfaces/interfaces';

class PersonService {

    public getPeople = (): Promise<AxiosResponse<IApiPerson[]>> => {
        return http.get('/Person');
    }

    public searchPeople = (): Promise<AxiosResponse<IApiSearchResult>> => {
        return http.get('/Person/Search?pettypeid=2');
    }

    public getTools = (): Promise<AxiosResponse<IApiPeopleTools>> => {
        return http.get('/Person/Tools');
    }
}
  
export default new PersonService();