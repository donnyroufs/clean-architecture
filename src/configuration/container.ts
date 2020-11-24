import { AuthService } from './../infrastructure/service/AuthService';
import "reflect-metadata";

import { Database } from "./../drivers/database/Database";

import { UserService } from "./../application/service/UserService";
import { UserRepository } from "./../infrastructure/repository/UserRepository";

import { Container } from "inversify";
import { types } from "./types";

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
