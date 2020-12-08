import { User } from "@domain/UserEntity";

export interface IUserRepository {
  findOne(email: string): Promise<User | null>;
}
