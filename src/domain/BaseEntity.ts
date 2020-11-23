export class BaseEntity {
  public created_at: any;
  public updated_at: any;

  constructor({ created_at, updated_at }) {
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
