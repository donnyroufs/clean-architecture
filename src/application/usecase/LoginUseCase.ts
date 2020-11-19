import { CustomError } from "./../../entrypoint/error/CustomError";
import { UserLoginResponseDto } from "../dto/UserLoginResponseDto";
import { ILoginUseCase } from "../interface/usecase/ILoginUseCase";
import { UserLoginRequestDto } from "../dto/UserLoginRequestDto";
import { IUserRepository } from "../interface/repository/IUserRepository";
import { mapper } from "../../configuration/helpers/mapper";

export class LoginUseCase implements ILoginUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    userCredentials: UserLoginRequestDto
  ): Promise<UserLoginResponseDto> {
    const foundUser = await this.userRepository.findOne(userCredentials.email);

    if (!foundUser) {
      throw new CustomError(404, "User does not exist");
    }

    // TODO: inject service for password comparison
    // TODO: Inject service for token creation
    // TODO: Throw proper errors
    const token = "jwt-token-or-something";

    return mapper(UserLoginResponseDto, { ...foundUser, token });
  }
}
