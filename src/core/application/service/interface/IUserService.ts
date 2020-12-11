import { UserRegisterRequestDto } from "@app/dto/UserRegisterRequestDto";
import { UserLoginRequestDto } from "@app/dto/UserLoginRequestDto";

export interface IUserService {
  login(userCredentials: UserLoginRequestDto);
  register(userCredentials: UserRegisterRequestDto);
}
