import { UserLoginResponseDto } from "../../dto/UserLoginResponseDto";
import { UserLoginRequestDto } from "../../dto/UserLoginRequestDto";

export interface ILoginUseCase {
  execute(
    userCredentials: UserLoginRequestDto
  ): Promise<UserLoginResponseDto | null>;
}
