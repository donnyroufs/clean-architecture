import { Expose } from "class-transformer";

export class User {
  @Expose() id: number;
  @Expose() email: string;
  @Expose() password?: string;
}
