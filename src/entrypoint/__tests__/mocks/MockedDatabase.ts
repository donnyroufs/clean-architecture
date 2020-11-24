import { IDatabase } from "../../../infrastructure/interfaces/IDatabase";

const data = {
  User: [
    { id: 1, email: "john@test.com", password: "123456" },
    { id: 2, email: "doe@test.com", password: "123456" },
  ],
};

export class MockedDatabase implements IDatabase {
  private data: any = {
    User: [
      {
        id: 1,
        email: "john@test.com",
        password: "123456",
        created_at: "2020-11-23T12:56:22.453Z",
        updated_at: "2020-11-23T12:56:22.453Z",
      },
      {
        id: 2,
        email: "doe@test.com",
        password: "123456",
        created_at: "2020-11-23T12:58:22.453Z",
        updated_at: "2020-11-23T12:59:22.453Z",
      },
    ],
  };

  private entity: string;

  constructor(entity: string) {
    this.entity = entity;
  }

  async findOne<T>(query: T): Promise<any> {
    return this.data[this.entity].find((entity: any) => entity.email === query);
  }
}
