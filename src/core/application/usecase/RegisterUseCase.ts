import "reflect-metadata";

import { inject, injectable } from "inversify";

import { User } from "@domain/UserEntity";

import { DomainServiceException } from "@core/common/exception/DomainServiceException";
import { UserRegisterResponseDto } from "@app/dto/UserRegisterResponseDto";
import { UserRegisterRequestDto } from "@app/dto/UserRegisterRequestDto";
import { IRegisterUseCase } from "./../../common/interface/usecase/IRegisterUseCase";
import { types } from "@core/common/types";
import { IUserRepository } from "@core/common/interface/repository/IUserRepository";
import { IAuthService } from "@core/common/interface/service/IAuthService";

@injectable()
export class RegisterUseCase implements IRegisterUseCase {
  constructor(
    @inject(types.IUserRepository) private userRepository: IUserRepository,
    @inject(types.IAuthService) private authService: IAuthService
  ) {}

  async execute(
    userCredentials: UserRegisterRequestDto
  ): Promise<UserRegisterResponseDto> {
    const user = new User({ ...userCredentials });

    const hashedPassword = this.authService.generateHashedPassword(
      userCredentials.password
    );

    user.password = hashedPassword;

    const created = this.userRepository.createOne(user);

    if (!created) {
      throw new DomainServiceException(
        "Failed to create a new user",
        "register usecase"
      );
    }

    return new UserRegisterResponseDto({ success: created });
  }
}
