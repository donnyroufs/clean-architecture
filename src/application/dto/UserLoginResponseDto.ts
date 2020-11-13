import { Expose } from "class-transformer";

export class UserLoginResponseDto {
  @Expose() email?: string;
  @Expose() token?: string;
}

// export interface IUserLoginResponseDto {
//   email: string;
//   token?: string;
// }
