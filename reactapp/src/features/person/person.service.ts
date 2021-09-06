import { AxiosResponse } from 'axios';

import { NotificationService } from '@utils/service/notification.service';

import http from '@utils/service/http-client';
import { IApiPeopleTools, IApiPerson, IApiSearchResult } from './person.interfaces';

class PersonService {

    public getPeople = (): Promise<AxiosResponse<IApiPerson[]>> => {
        return http
            .get('/Person')
            .catch(error => {
                NotificationService.error('People', 'Failed to get people', { progressBar: false, showCloseButton: true, attention: true });
                return error;
            });
    }

    public searchPeople = (): Promise<AxiosResponse<IApiSearchResult>> => {
        return http
            .get('/Person/Search?pettypeid=2')
            .catch(error => {
                NotificationService.error('People', 'Failed to search people');
                return error;
            });
    }

    public getTools = (): Promise<AxiosResponse<IApiPeopleTools>> => {
        return http
            .get('/Person/Tools')
            .catch(error => {
                NotificationService.error('People', 'Failed to get tools');
                return error;
            });
    }
}
  
export default new PersonService();