import "reflect-metadata";

import { DomainServiceException } from "./../../common/exception/DomainServiceException";

import { IAuthService } from "@core/common/interface/service/IAuthService";
import { UserLoginRequestDto } from "./../../application/dto/UserLoginRequestDto";

import { AuthService } from "@utils/mocks/AuthService";
import { MockedDatabase } from "@utils/mocks/MockedDatabase";
import { User } from "@config/modules";
import { IDatabase } from "@infra/interface/IDatabase";
import { Container, ContainerModule } from "inversify";
import { types } from "@core/common/types";
import { ILoginUseCase } from "@core/common/interface/usecase/ILoginUseCase";
import { LoginUseCase } from "@core/application/usecase/LoginUseCase";
import { Database } from "@infra/drivers/database/Database";

describe("User Controller", () => {
  let container: Container;
  let loginUseCase: ILoginUseCase;

  let credentials: UserLoginRequestDto = {
    email: "john@test.com",
    password: "123456",
  };

  beforeEach(() => {
    container = new Container();

    const Core1 = new ContainerModule((bind) => {
      bind<IDatabase>(types.IDatabase).toConstructor(MockedDatabase);
      bind<ILoginUseCase>(types.ILoginUseCase).to(LoginUseCase);
      bind<IAuthService>(types.IAuthService).to(AuthService);
    });

    container.load(Core1, User);

    loginUseCase = container.get<ILoginUseCase>(types.ILoginUseCase);
  });

  afterEach(() => {
    container = null;
  });

  it("Should throw a DomainServiceException: Missing user", async () => {
    await expect(
      loginUseCase.execute({ email: "", password: "" })
    ).rejects.toBeInstanceOf(DomainServiceException);
  });

  it("Should throw a DomainServiceException: invalid password", async () => {
    await expect(
      loginUseCase.execute({ ...credentials, password: "invalid" })
    ).rejects.toBeInstanceOf(DomainServiceException);
  });

  it("Should return an authentication token", async () => {
    const data = await loginUseCase.execute(credentials);
    expect(data).toHaveProperty("token");
    expect(data.token.length).toBeGreaterThan(16);
  });
});
