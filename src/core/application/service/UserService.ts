import { IUserService } from "./interface/IUserService";
import { types } from "../../common/types";
import { inject, injectable } from "inversify";
import { UserLoginRequestDto } from "../dto/UserLoginRequestDto";
import { IUserRepository } from "../../common/interface/repository/IUserRepository";
import { LoginUseCase } from "../usecase/LoginUseCase";
import { IAuthService } from "../../common/interface/service/IAuthService";
import { ILoginUseCase } from "../../common/interface/usecase/ILoginUseCase";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(types.ILoginUseCase) private loginUseCase: ILoginUseCase
  ) {}

  public login(userCredentials: UserLoginRequestDto) {
    return this.loginUseCase.execute(userCredentials);
  }
}
