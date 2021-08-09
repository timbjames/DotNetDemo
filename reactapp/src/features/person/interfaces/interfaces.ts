export interface IApiPerson {
    id: number;
    name: string;
}
// TODO: Match to API Model
export interface IApiSearchResult {
    results: IApiPerson[];
}