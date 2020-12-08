import { User } from "@core/domain/UserEntity";
import { Database } from "@infra/drivers/database/Database";
import { types } from "@core/common/types";
import { IDatabase } from "@infra/interface/IDatabase";
import { IUserRepository } from "@core/common/interface/repository/IUserRepository";
import { inject, injectable, interfaces } from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
  public readonly db: IDatabase;

  constructor(@inject(types.IDatabase) Database: interfaces.Newable<Database>) {
    this.db = new Database("User");
  }

  async findOne(email: string): Promise<User> {
    const foundUser = await this.db.findOne({ email });
    return foundUser;
  }
}
