import { IUserLoginResponseDto } from "../dto/IUserLoginResponseDto";
import { IUserLoginRequestDto } from "../dto/IUserLoginRequestDto";

export interface ILoginUseCase {
  execute(
    userCredentials: IUserLoginRequestDto
  ): Promise<IUserLoginResponseDto | null>;
}
