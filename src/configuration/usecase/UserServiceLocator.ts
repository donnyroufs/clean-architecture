import { LoginUseCase } from "./../../application/usecase/LoginUseCase";
import { IUserRepository } from "./../../application/interfaces/repository/IUserRepository";
import { inject, injectable } from "inversify";
import { types } from "../types";

@injectable()
export class UserServiceLocator {
  constructor(
    @inject(types.IUserRepository) private repository: IUserRepository
  ) {}

  public getLoginUseCase() {
    return new LoginUseCase(this.repository);
  }
}
