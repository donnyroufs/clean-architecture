import { MockedDatabase } from "@utils/mocks/MockedDatabase";
import { Database } from "@infra/drivers/database/Database";
import { ContainerModule } from "inversify";

import { LoginUseCase } from "@core/application/usecase/LoginUseCase";
import { IAuthService } from "@core/common/interface/service/IAuthService";
import { ILoginUseCase } from "@core/common/interface/usecase/ILoginUseCase";
import { types } from "@core/common/types";

import { IDatabase } from "@infra/interface/IDatabase";
import { AuthService } from "@infra/service/AuthService";

const Core = new ContainerModule((bind) => {
  bind<IDatabase>(types.IDatabase).toConstructor(Database);
  bind<ILoginUseCase>(types.ILoginUseCase).to(LoginUseCase).inSingletonScope();
  bind<IAuthService>(types.IAuthService).to(AuthService).inSingletonScope();
});

export { Core };
