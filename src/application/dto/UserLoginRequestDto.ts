import { Expose } from "class-transformer";

export class UserLoginRequestDto {
  @Expose() email: string;
  @Expose() password: string;
}

// export interface IUserLoginRequestDto {
//   email?: string;
//   password: string;
// }
