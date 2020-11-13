import { Expose } from "class-transformer";

export class UserLoginRequestDto {
  @Expose() email: string;
  @Expose() password: string;
}

