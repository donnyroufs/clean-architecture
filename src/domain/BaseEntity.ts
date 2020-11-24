import { IBaseEntity } from "./interface/IBaseEntity";
export class BaseEntity implements IBaseEntity {
  public created_at?: string;
  public updated_at?: string;

  constructor({ created_at = null, updated_at = null }) {
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
