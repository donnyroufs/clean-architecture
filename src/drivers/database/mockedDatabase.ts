import { injectable } from "inversify";
import { IDatabase } from "./IDatabase";

const data = {
  User: [
    { id: 1, email: "john@test.com", password: "123456" },
    { id: 2, email: "doe@test.com", password: "123456" },
  ],
};

export class mockedDatabase implements IDatabase {
  private entity: string;

  constructor(entity: string) {
    this.entity = entity;
  }

  findOne<T>(query: T): Promise<any> {
    return data[this.entity].find((entity: any) => entity.email === query);
  }
}