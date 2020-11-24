import { DomainServiceException } from "./../../domain/exception/DomainServiceException";
import { User } from "../../domain/UserEntity";
import { UserLoginResponseDto } from "../dto/UserLoginResponseDto";
import { ILoginUseCase } from "../interface/usecase/ILoginUseCase";
import { UserLoginRequestDto } from "../dto/UserLoginRequestDto";
import { IUserRepository } from "../interface/repository/IUserRepository";
import { IAuthService } from "../interface/service/IAuthService";

export class LoginUseCase implements ILoginUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly authService: IAuthService
  ) {}

  async execute(
    userCredentials: UserLoginRequestDto
  ): Promise<UserLoginResponseDto> {
    const userData = await this.userRepository.findOne(userCredentials.email);

    if (!userData) {
      throw new DomainServiceException("Missing user", "user repository");
    }

    const user = new User(userData, true);

    const validPassword = this.authService.comparePasswords(
      userCredentials.password,
      user.password
    );

    if (!validPassword) {
      throw new DomainServiceException(
        "User credentials are not valid",
        "auth service"
      );
    }

    const token = this.authService.generateToken(user);

    return new UserLoginResponseDto({ ...user, token });
  }
}
