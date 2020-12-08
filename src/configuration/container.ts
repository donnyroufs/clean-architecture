import "reflect-metadata";

import { Database } from "../infrastructure/drivers/database/Database";

import { AuthService } from './../infrastructure/service/AuthService';

import { UserService } from "../core/application/service/UserService";
import { UserRepository } from "./../infrastructure/repository/UserRepository";

import { Container } from "inversify";
import { types } from "../core/common/types";

const container = new Container();

container
  .bind<UserService>(types.UserService)
  .to(UserService);

container
  .bind<UserRepository>(types.IUserRepository)
  .to(UserRepository);

container
  .bind<Database>(types.Database)
  .toConstructor(Database);
  
container
  .bind<AuthService>(types.AuthService)
  .to(AuthService)

export { container };
