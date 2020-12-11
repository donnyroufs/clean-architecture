import { inject, injectable } from "inversify";

import { IRegisterUseCase } from "@core/common/interface/usecase/IRegisterUseCase";
import { ILoginUseCase } from "@core/common/interface/usecase/ILoginUseCase";
import { types } from "@core/common/types";

import { UserRegisterRequestDto } from "@app/dto/UserRegisterRequestDto";
import { UserLoginRequestDto } from "@app/dto/UserLoginRequestDto";
import { IUserService } from "@app/service/interface/IUserService";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(types.ILoginUseCase) private loginUseCase: ILoginUseCase,
    @inject(types.IRegisterUseCase) private registerUseCase: IRegisterUseCase
  ) {}

  public login(userCredentials: UserLoginRequestDto) {
    return this.loginUseCase.execute(userCredentials);
  }

  public register(userCredentials: UserRegisterRequestDto) {
    return this.registerUseCase.execute(userCredentials);
  }
}
