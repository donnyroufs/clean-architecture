import "dotenv/config";

import { injectable } from "inversify";
import * as knex from "knex";
import knexfile from "./knexfile";
import { IDatabase } from "@infra/interface/IDatabase";

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

  async findOne(query: object): Promise<any> {
    return this.client(this.entity).where(query).first().select("*");
  }

  async createOne(query: object): Promise<any> {
    await this.client(this.entity).insert(query);
    return true;
  }
}
