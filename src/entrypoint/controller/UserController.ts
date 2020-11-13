import { BaseController } from "./BaseController";
import * as express from "express";

import { UserLoginRequestDto } from "../../application/dto/UserLoginRequestDto";
import { UserService } from "../../application/service/UserService";
import { inject } from "inversify";
import { types } from "../../configuration/types";
import {
  controller,
  httpPost,
  response,
  requestBody,
} from "inversify-express-utils";


@controller("/user")
export class UserController extends BaseController {
  @inject(types.UserService) private readonly userService: UserService;

  @httpPost("/login")
  async login(
    @requestBody() body: UserLoginRequestDto,
    @response() res: express.Response
  ) {
    if (!body.email || !body.password) {
      return this.notFound();
    }

    const loginResult = await this.userService.login(body);

    if (!loginResult) {
      return this.notAuthorized();
    }

    res.status(201).json(loginResult);
  }
}
