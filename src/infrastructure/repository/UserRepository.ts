import { Database } from "../drivers/database/Database";
import { types } from "../../core/common/types";
import { IDatabase } from "../interfaces/IDatabase";
import { IUserRepository } from "../../core/common/interface/repository/IUserRepository";
import { inject, injectable, interfaces } from "inversify";
import { IUserEntity } from "../../core/common/interface/entity/IUserEntity";

@injectable()
export class UserRepository implements IUserRepository {
  public readonly db: IDatabase;

  constructor(@inject(types.Database) Database: interfaces.Newable<Database>) {
    this.db = new Database("User");
  }

  async findOne(email: string): Promise<IUserEntity> {
    const foundUser = await this.db.findOne({ email });
    return foundUser;
  }
}
