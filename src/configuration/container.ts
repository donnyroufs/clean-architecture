import { UserRepository } from './../infrastructure/repository/UserRepository';
import "reflect-metadata";

import { UserServiceLocator } from "./usecase/UserServiceLocator";
import { Container } from "inversify";
import { types } from "./types";

const container = new Container();

// Register Services
container
  .bind<UserServiceLocator>(types.UserServiceLocator)
  .to(UserServiceLocator);

container
  .bind<UserRepository>(types.IUserRepository)
  .to(UserRepository)

export { container };
