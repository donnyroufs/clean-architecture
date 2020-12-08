import { UserLoginRequestDto } from "../../../application/dto/UserLoginRequestDto";

export interface IUserService {
  login(userCredentials: UserLoginRequestDto);
}
