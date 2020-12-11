import { Database } from "@infra/drivers/database/Database";
import { ContainerModule } from "inversify";

import { IAuthService } from "@core/common/interface/service/IAuthService";

import { LoginUseCase } from "@core/application/usecase/LoginUseCase";
import { ILoginUseCase } from "@core/common/interface/usecase/ILoginUseCase";

import { RegisterUseCase } from "./../../core/application/usecase/RegisterUseCase";
import { IRegisterUseCase } from "./../../core/common/interface/usecase/IRegisterUseCase";

import { IDatabase } from "@infra/interface/IDatabase";
import { AuthService } from "@infra/service/AuthService";

import { types } from "@core/common/types";

const Core = new ContainerModule((bind) => {
  bind<IDatabase>(types.IDatabase).toConstructor(Database);
  bind<ILoginUseCase>(types.ILoginUseCase).to(LoginUseCase).inSingletonScope();
  bind<IRegisterUseCase>(types.IRegisterUseCase)
    .to(RegisterUseCase)
    .inSingletonScope();
  bind<IAuthService>(types.IAuthService).to(AuthService).inSingletonScope();
});

export { Core };
