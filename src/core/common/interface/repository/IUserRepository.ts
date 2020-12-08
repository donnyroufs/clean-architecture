import { IUserEntity } from "../entity/IUserEntity";

export interface IUserRepository {
  findOne(email: string): Promise<IUserEntity | null>;
}
