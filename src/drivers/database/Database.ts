import "dotenv/config";

import { injectable } from "inversify";
import * as knex from "knex";
import knexfile from "./knexfile";
import { IDatabase } from "./IDatabase";

const env = process.env.NODE_ENV;

@injectable()
export class Database implements IDatabase {
  private config: knex.Config = knexfile[env];
  private client: knex;
  private entity: string;

  constructor(entity: string) {
    this.client = knex(this.config);
    this.entity = entity;
  }

  async findOne<T>(query: T): Promise<any> {
    return this.client(this.entity).select("*")[0];
  }
}
