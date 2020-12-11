export interface IDatabase {
  findOne(query: object): Promise<any>;
  createOne(data: object): Promise<any>;
}
