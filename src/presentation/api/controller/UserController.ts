import * as express from "express";
import { BaseController } from "./BaseController";

import { UserLoginRequestDto } from "@app/dto/UserLoginRequestDto";
import { UserService } from "@app/service/UserService";
import { inject } from "inversify";
import { types } from "@core/common/types";

import {
  controller,
  httpPost,
  response,
  requestBody,
} from "inversify-express-utils";

@controller("/user")
export class UserController extends BaseController {
  @inject(types.IUserService) private readonly userService: UserService;

  @httpPost("/login")
  async login(
    @requestBody() body: UserLoginRequestDto,
    @response() res: express.Response
  ) {
    if (!body.email || !body.password) {
      this.badRequest();
    }

    const loginResult = await this.userService.login(body).catch((err) => {
      if (err.message === "Missing user") {
        this.notFound(err.message);
      } else {
        this.notAuthorized(err.message);
      }
    });

    res.status(201).json(loginResult);
  }

  @httpPost("/register")
  async register(
    @requestBody() body: UserLoginRequestDto,
    @response() res: express.Response
  ) {
    if (!body.email || !body.password) {
      this.badRequest();
    }

    const result = await this.userService.register(body);

    res.status(201).json(result);
  }
}
