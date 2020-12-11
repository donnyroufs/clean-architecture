import { UserLoginResponseDto } from "@app/dto/UserLoginResponseDto";
import { UserLoginRequestDto } from "@app/dto/UserLoginRequestDto";

export interface ILoginUseCase {
  execute(
    userCredentials: UserLoginRequestDto
  ): Promise<UserLoginResponseDto | null>;
}
