import { ILoginUseCase } from "./../../application/interfaces/usecase/ILoginUseCase";
import { inject } from "inversify";
import { types } from "../../configuration/types";
import {
  controller,
  httpPost,
  response,
  request,
  requestParam,
  requestBody,
} from "inversify-express-utils";
import * as express from "express";
import { UserServiceLocator } from "../../configuration/usecase/UserServiceLocator";
import { IUserLoginRequestDto } from "@/application/interfaces/dto/IUserLoginRequestDto";

@controller("/user")
export class UserController {
  private readonly loginUseCase: ILoginUseCase;

  constructor(
    @inject(types.UserServiceLocator) serviceLocator: UserServiceLocator
  ) {
    this.loginUseCase = serviceLocator.getLoginUseCase();
  }

  @httpPost("/:email")
  async login(
    @requestParam("email") email: string,
    @requestBody() body: IUserLoginRequestDto,
    @response() res: express.Response
  ) {
    const loginResult = await this.loginUseCase.execute({
      email,
      password: body.password,
    });

    res.json(loginResult);
  }
}
