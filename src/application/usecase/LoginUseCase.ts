import { User } from "../../domain/UserEntity";
import { UserLoginResponseDto } from "../dto/UserLoginResponseDto";
import { ILoginUseCase } from "../interface/usecase/ILoginUseCase";
import { UserLoginRequestDto } from "../dto/UserLoginRequestDto";
import { IUserRepository } from "../interface/repository/IUserRepository";

export class LoginUseCase implements ILoginUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    userCredentials: UserLoginRequestDto
  ): Promise<UserLoginResponseDto> {
    const user = new User(
      await this.userRepository.findOne(userCredentials.email)
    );

    // TODO: inject service for password comparison
    // TODO: Inject service for token creation
    // TODO: Throw proper errors
    const token = "jwt-token-or-something";

    return new UserLoginResponseDto({ ...user, token });
  }
}
