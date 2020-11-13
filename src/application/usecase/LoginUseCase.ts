import { IUserLoginResponseDto } from "../interfaces/dto/IUserLoginResponseDto";
import { ILoginUseCase } from "../interfaces/usecase/ILoginUseCase";
import { IUserLoginRequestDto } from "../interfaces/dto/IUserLoginRequestDto";
import { IUserRepository } from "../interfaces/repository/IUserRepository";

export class LoginUseCase implements ILoginUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    userCredentials: IUserLoginRequestDto
  ): Promise<IUserLoginResponseDto> {
    const foundUser = await this.userRepository.findOne(userCredentials.email);

    if (!foundUser) {
      return null;
    }

    // TODO: inject service for password comparison
    // TODO: Inject service for token creation
    const token = "hi";

    //? How to map this to a dto?
    return {
      email: foundUser.email,
      token: token,
    };
  }
}
