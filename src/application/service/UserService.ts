import { types } from "../../configuration/types";
import { inject, injectable } from "inversify";
import { UserLoginRequestDto } from "../dto/UserLoginRequestDto";
import { IUserRepository } from "../interface/repository/IUserRepository";
import { LoginUseCase } from "../usecase/LoginUseCase";

@injectable()
export class UserService {
  constructor(
    @inject(types.IUserRepository) private repository: IUserRepository
  ) {}

  public login(userCredentials: UserLoginRequestDto) {
    return new LoginUseCase(this.repository).execute(userCredentials);
  }
}
