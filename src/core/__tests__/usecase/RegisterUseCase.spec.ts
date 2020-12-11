import { DomainValidationException } from "./../../common/exception/DomainValidationException";
import { RegisterUseCase } from "./../../application/usecase/RegisterUseCase";
import { IRegisterUseCase } from "./../../common/interface/usecase/IRegisterUseCase";
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

describe("User Controller", () => {
  let container: Container;
  let registerUseCase: IRegisterUseCase;

  let credentials: UserLoginRequestDto = {
    email: "doe@test.com",
    password: "123456",
  };

  beforeEach(() => {
    container = new Container();

    const Core1 = new ContainerModule((bind) => {
      bind<IDatabase>(types.IDatabase).toConstructor(MockedDatabase);
      bind<IRegisterUseCase>(types.IRegisterUseCase).to(RegisterUseCase);
      bind<IAuthService>(types.IAuthService).to(AuthService);
    });

    container.load(Core1, User);

    registerUseCase = container.get<IRegisterUseCase>(types.IRegisterUseCase);
  });

  afterEach(() => {
    container = null;
  });

  it("Should throw a DomainValidationException: invalid email", async () => {
    await expect(
      registerUseCase.execute({ email: "awesome", password: "1223312321" })
    ).rejects.toBeInstanceOf(DomainValidationException);
  });

  it("Should throw a DomainValidationException: invalid password length", async () => {
    await expect(
      registerUseCase.execute({ email: "awesome@mail.com", password: "234" })
    ).rejects.toBeInstanceOf(DomainValidationException);
  });

  it("Should return true on successfuly creating user", async () => {
    const res = await registerUseCase.execute(credentials);
    expect(res).toBeTruthy();
  });
});
