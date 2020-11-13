import { UserService } from "./../application/service/UserService";
import { UserRepository } from './../infrastructure/repository/UserRepository';
import "reflect-metadata";

import { Container } from "inversify";
import { types } from "./types";

const container = new Container();

// Register Services
container.bind<UserService>(types.UserService).to(UserService);

container
  .bind<UserRepository>(types.IUserRepository)
  .to(UserRepository)


export { container };
