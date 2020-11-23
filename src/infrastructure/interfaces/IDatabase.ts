export interface IDatabase {
  findOne(query: object): Promise<any>;
}
