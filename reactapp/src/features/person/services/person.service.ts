import { AxiosResponse } from 'axios';

import http from '../../../common/http-client';
import { IApiPerson, IApiSearchResult } from '../interfaces/interfaces';

class PersonService {

    public getPeople = (): Promise<AxiosResponse<IApiPerson[]>> => {
        return http.get('/Person');
    }

    public searchPeople = (): Promise<AxiosResponse<IApiSearchResult>> => {
        return http.get('/Person/Search?pettypeid=2');
    }
}
  
export default new PersonService();