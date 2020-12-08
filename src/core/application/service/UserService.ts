import { inject, injectable } from "inversify";
import { IUserService } from "@app/service/interface/IUserService";
import { types } from "@core/common/types";
import { UserLoginRequestDto } from "@app/dto/UserLoginRequestDto";
import { ILoginUseCase } from "@core/common/interface/usecase/ILoginUseCase";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(types.ILoginUseCase) private loginUseCase: ILoginUseCase
  ) {}

  public login(userCredentials: UserLoginRequestDto) {
    return this.loginUseCase.execute(userCredentials);
  }
}
