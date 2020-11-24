import { IUserEntity } from "../../../domain/interface/IUserEntity";

export interface IUserRepository {
  findOne(email: string): Promise<IUserEntity | null>;
}
