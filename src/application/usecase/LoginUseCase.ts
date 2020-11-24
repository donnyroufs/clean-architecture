import { DomainServiceException } from "./../../domain/exception/DomainServiceException";
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
    const userData = await this.userRepository.findOne(userCredentials.email);

    if (!userData) {
      throw new DomainServiceException("Missing user", "user repository");
    }

    const user = new User(userData);

    // Inject auth service
    const token = "jwt-token-or-something";

    return new UserLoginResponseDto({ ...user, token });
  }
}
