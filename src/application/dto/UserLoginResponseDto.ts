import { Expose } from "class-transformer";
import { textChangeRangeIsUnchanged } from "typescript";

// export class UserLoginResponseDto {
//   @Expose() email?: string;
//   @Expose() token?: string;
// }
export class UserLoginResponseDto {
  public email: string;
  public token?: string;

  constructor({ email, token }) {
    this.email = email;
    this.token = token;
  }
}
