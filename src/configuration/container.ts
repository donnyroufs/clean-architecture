import "reflect-metadata";

import { IUserService } from './../core/application/service/interface/IUserService';
import { LoginUseCase } from './../core/application/usecase/LoginUseCase';

import { Database } from "../infrastructure/drivers/database/Database";

import { AuthService } from './../infrastructure/service/AuthService';

import { UserService } from "../core/application/service/UserService";
import { UserRepository } from "./../infrastructure/repository/UserRepository";

import { Container } from "inversify";
import { types } from "../core/common/types";
import { ILoginUseCase } from "../core/common/interface/usecase/ILoginUseCase";
import { IUserRepository } from '../core/common/interface/repository/IUserRepository';
import { IDatabase } from '../infrastructure/interface/IDatabase';
import { IAuthService } from '../core/common/interface/service/IAuthService';

const container = new Container();

container
  .bind<IUserService>(types.IUserService)
  .to(UserService)
  .inSingletonScope();

container
  .bind<IUserRepository>(types.IUserRepository)
  .to(UserRepository)
  .inSingletonScope();

container
  .bind<IDatabase>(types.IDatabase)
  .toConstructor(Database)
  
container
  .bind<IAuthService>(types.IAuthService)
  .to(AuthService)
  .inSingletonScope();

container
  .bind<ILoginUseCase>(types.ILoginUseCase)
  .to(LoginUseCase)
  .inSingletonScope()

export { container };
