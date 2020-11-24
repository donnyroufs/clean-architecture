import { IUserService } from "./../interface/service/IUserService";
import { types } from "../../configuration/types";
import { inject, injectable } from "inversify";
import { UserLoginRequestDto } from "../dto/UserLoginRequestDto";
import { IUserRepository } from "../interface/repository/IUserRepository";
import { LoginUseCase } from "../usecase/LoginUseCase";
import { IAuthService } from "../interface/service/IAuthService";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(types.IUserRepository) private repository: IUserRepository,
    @inject(types.AuthService) private authService: IAuthService
  ) {}

  public login(userCredentials: UserLoginRequestDto) {
    return new LoginUseCase(this.repository, this.authService).execute(
      userCredentials
    );
  }
}
