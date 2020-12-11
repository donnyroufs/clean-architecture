import { UserRegisterResponseDto } from "./../../../application/dto/UserRegisterResponseDto";
import { UserRegisterRequestDto } from "./../../../application/dto/UserRegisterRequestDto";

export interface IRegisterUseCase {
  execute(
    userCredentials: UserRegisterRequestDto
  ): Promise<UserRegisterResponseDto | null>;
}
