import { UserLoginResponseDto } from "../../dto/UserLoginResponseDto";
import { UserLoginRequestDto } from "../../dto/UserLoginRequestDto";
import { IAuthService } from "../service/IAuthService";

export interface ILoginUseCase {
  execute(
    userCredentials: UserLoginRequestDto,
    AuthService: IAuthService
  ): Promise<UserLoginResponseDto | null>;
}
