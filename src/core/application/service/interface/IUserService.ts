import { UserLoginRequestDto } from "@app/dto/UserLoginRequestDto";

export interface IUserService {
  login(userCredentials: UserLoginRequestDto);
}
