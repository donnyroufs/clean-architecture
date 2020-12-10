import { ContainerModule } from "inversify";

import { LoginUseCase } from "@core/application/usecase/LoginUseCase";
import { IAuthService } from "@core/common/interface/service/IAuthService";
import { ILoginUseCase } from "@core/common/interface/usecase/ILoginUseCase";
import { types } from "@core/common/types";

import { IDatabase } from "@infra/interface/IDatabase";
import { AuthService } from "@infra/service/AuthService";

import { MockedDatabase } from "@presentation/api/__tests__/mocks/MockedDatabase";

const Core = new ContainerModule((bind) => {
  bind<IDatabase>(types.IDatabase).toConstructor(MockedDatabase);
  bind<ILoginUseCase>(types.ILoginUseCase).to(LoginUseCase).inSingletonScope();
  bind<IAuthService>(types.IAuthService).to(AuthService).inSingletonScope();
});

export { Core };
