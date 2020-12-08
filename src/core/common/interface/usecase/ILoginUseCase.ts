import { UserLoginResponseDto } from "../../../application/dto/UserLoginResponseDto";
import { UserLoginRequestDto } from "../../../application/dto/UserLoginRequestDto";
import { IAuthService } from "../service/IAuthService";

export interface ILoginUseCase {
  execute(
    userCredentials: UserLoginRequestDto,
    AuthService: IAuthService
  ): Promise<UserLoginResponseDto | null>;
}
