export interface IApiPerson {
    id: number;
    name: string;
}
// TODO: Match to API Model
export interface IApiSearchResult {
    results: IApiPerson[];
}

interface KeyValuePair {
    key: string;
    value: string;
}

export interface IApiPeopleTools {
    petTypes: KeyValuePair[];
}