import { IBaseEntity } from "./interface/IBaseEntity";

export type DateFields = {
  created_at: string;
  updated_at: string;
};

export class BaseEntity implements IBaseEntity {
  public created_at?: string;
  public updated_at?: string;

  constructor({ created_at, updated_at }: Partial<DateFields>) {
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
