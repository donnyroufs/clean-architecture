import { IUserEntity } from "./interface/IUserEntity";
import { DomainValidationException } from "@core/common/exception/DomainValidationException";
import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity implements IUserEntity {
  public id?: number;
  public email: string;
  public password?: string;

  constructor(
    { id, email, password, ...timestamps }: IUserEntity,
    hashed: boolean = false
  ) {
    super(timestamps);

    this.validation(id, email, password, hashed);

    this.id = id;
    this.email = email;
    this.password = password;
  }

  private validation(
    id: number,
    email: string,
    password: string,
    hashed: boolean
  ) {
    if (!email.includes("@")) {
      throw new DomainValidationException("Email is not valid", "email field");
    }

    if (!hashed) {
      if (password.length < 6 || password.length > 32) {
        throw new DomainValidationException(
          "Password must be between 6 and 32 characters",
          "password field"
        );
      }
    }
  }
}
