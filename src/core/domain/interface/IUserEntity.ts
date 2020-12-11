import { IBaseEntity } from "./IBaseEntity";

export interface IUserEntity extends IBaseEntity {
  id?: number;
  email: string;
  password?: string;
}
