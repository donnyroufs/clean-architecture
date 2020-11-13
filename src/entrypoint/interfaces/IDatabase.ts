export interface IDatabase {
  findOne<T>(query: T): Promise<any>;
}
