import { ValidationException } from "./exception/ValidationException";
import { BaseEntity } from "./BaseEntity";
import { Expose } from "class-transformer";

// export class User {
//   @Expose() id: number;
//   @Expose() email: string;
//   @Expose() password?: string;
// }

export class User extends BaseEntity {
  public id: number;
  public email: string;
  public password?: string;

  constructor(
    { id, email, password, ...timestamps }: User,
    private hashed: boolean = false
  ) {
    super(timestamps);

    this.hashed = hashed;

    this.validation(id, email, password);

    this.id = id;
    this.email = email;
    this.password = password;
  }

  private validation(id: number, email: string, password: string) {
    if (typeof id === "string") {
      throw new ValidationException("id must be of type number", "id field");
    }

    if (!email.includes("@")) {
      throw new ValidationException("Email is not valid", "email field");
    }

    if (!this.hashed) {
      if (password.length < 6 || password.length > 32) {
        throw new ValidationException(
          "Password must be between 6 and 32 characters",
          "password field"
        );
      }
    }
  }
}
