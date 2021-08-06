export interface IApiPerson {
    id: number;
    name: string;
}

export interface IApiSearchResult {
    results: IApiPerson[];
}