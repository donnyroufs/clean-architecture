import { UserLoginRequestDto } from "./../../dto/UserLoginRequestDto";

export interface IUserService {
  login(userCredentials: UserLoginRequestDto);
}
