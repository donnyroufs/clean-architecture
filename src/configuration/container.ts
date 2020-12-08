import "reflect-metadata";

import { Container } from "inversify";

import { types } from "@core/common/types";
import { ILoginUseCase } from "@core/common/interface/usecase/ILoginUseCase";
import { IUserRepository } from "@core/common/interface/repository/IUserRepository";
import { IAuthService } from "@core/common/interface/service/IAuthService";
import { UserService } from "@core/application/service/UserService";

import { IUserService } from "@app/service/interface/IUserService";
import { LoginUseCase } from "@app/usecase/LoginUseCase";

import { Database } from "@infra/drivers/database/Database";
import { IDatabase } from "@infra/interface/IDatabase";
import { AuthService } from "@infra/service/AuthService";
import { UserRepository } from "@infra/repository/UserRepository";

const container = new Container();

container
  .bind<IUserService>(types.IUserService)
  .to(UserService)
  .inSingletonScope();

container
  .bind<IUserRepository>(types.IUserRepository)
  .to(UserRepository)
  .inSingletonScope();

container.bind<IDatabase>(types.IDatabase).toConstructor(Database);

container
  .bind<IAuthService>(types.IAuthService)
  .to(AuthService)
  .inSingletonScope();

container
  .bind<ILoginUseCase>(types.ILoginUseCase)
  .to(LoginUseCase)
  .inSingletonScope();

export { container };
