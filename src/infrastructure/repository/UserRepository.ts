import { Database } from "./../../drivers/database/Database";
import { types } from "../../configuration/types";
import { IDatabase } from "../interfaces/IDatabase";
import { IUserRepository } from "./../../application/interface/repository/IUserRepository";
import { inject, injectable, interfaces } from "inversify";
import { User } from "../../domain/UserEntity";
import { CustomError } from "../../entrypoint/error/CustomError";

@injectable()
export class UserRepository implements IUserRepository {
  public readonly db: IDatabase;

  constructor(@inject(types.Database) Database: interfaces.Newable<Database>) {
    this.db = new Database("User");
  }

  async findOne(email: string): Promise<User> {
    const foundUser = await this.db.findOne({ email });

    if (!foundUser) {
      throw new CustomError(404, "User does not exist");
    }

    return new User(foundUser);
  }
}
