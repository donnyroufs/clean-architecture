import { IUserRepository } from "./../../application/interfaces/repository/IUserRepository";
import { injectable } from "inversify";
import { User } from "@/domain/UserEntity";
// Should be injected
import { db } from "../../drivers/database/mockedDatabase";

@injectable()
export class UserRepository implements IUserRepository {
  async findOne(email: string): Promise<User> {
    const foundUser = await db.findOne(email);
    return foundUser;
  }
}
