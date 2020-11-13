import "reflect-metadata";

import { UserService } from "./../application/service/UserService";
import { UserRepository } from './../infrastructure/repository/UserRepository';

import { Container } from "inversify";
import { types } from "./types";

const container = new Container();

container
  .bind<UserService>(types.UserService)
  .to(UserService);

container
  .bind<UserRepository>(types.IUserRepository)
  .to(UserRepository)


export { container };
