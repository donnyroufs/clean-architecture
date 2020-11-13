import { Expose } from "class-transformer";

export class UserLoginResponseDto {
  @Expose() email?: string;
  @Expose() token?: string;
}

