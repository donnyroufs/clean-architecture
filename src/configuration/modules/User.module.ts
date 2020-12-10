import { ContainerModule } from "inversify";

import { IUserService } from "@core/application/service/interface/IUserService";
import { UserService } from "@core/application/service/UserService";
import { IUserRepository } from "@core/common/interface/repository/IUserRepository";
import { types } from "@core/common/types";

import { UserRepository } from "@infra/repository/UserRepository";

const User = new ContainerModule((bind) => {
  bind<IUserService>(types.IUserService).to(UserService).inSingletonScope();
  bind<IUserRepository>(types.IUserRepository)
    .to(UserRepository)
    .inSingletonScope();
});

export { User };
